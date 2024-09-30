import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(
  Prisma.PrismaClientKnownRequestError,
  Prisma.PrismaClientUnknownRequestError,
  Prisma.PrismaClientRustPanicError,
  Prisma.PrismaClientInitializationError,
  Prisma.PrismaClientValidationError,
)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    // For errors that are neither PrismaExceptions nor HttpExceptions
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    //Handle Prisma Exceptions
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002': // Unique constraint failed - already exists
          status = HttpStatus.CONFLICT;
          message = `A ${exception.meta.modelName.toString().toLowerCase()} with this ${exception.meta.target[0]} already exists`;
          break;
        case 'P2025': // Record not found
          status = HttpStatus.NOT_FOUND;
          message = `${exception.meta.modelName} not found`;
          break;
        case 'P2003': // Foreign key constraint violation
          status = HttpStatus.BAD_REQUEST;
          message = `Bad payload for ${exception.meta.modelName.toString().toLowerCase()}.${exception.meta.target[0]}`;
          break;
        default:
          status = HttpStatus.BAD_REQUEST;
          message = `Prisma error: ${exception.message}`;
      }
    } else if (exception instanceof Prisma.PrismaClientUnknownRequestError) {
      status = HttpStatus.BAD_REQUEST;
      message =
        'Unknown database request error occurred during a Prisma operation';
    } else if (exception instanceof Prisma.PrismaClientRustPanicError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Unexpected database panic occurred during a Prisma operation';
    } else if (exception instanceof Prisma.PrismaClientInitializationError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Database initialization failed during a Prisma operation';
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Validation error occurred during a Prisma operation';

      //Handle HttpExceptions
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse() as string;
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message,
      path: request.url,
    });
  }
}

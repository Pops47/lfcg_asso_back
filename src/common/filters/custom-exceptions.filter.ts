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
  HttpException,
)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();

    // For errors that are neither PrismaExceptions nor HttpExceptions
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let type = 'Unknown';

    //Handle Prisma Exceptions
    if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      type = 'Database Exception';
      switch (exception.code) {
        case 'P2002': // Unique constraint failed - already exists
          status = HttpStatus.CONFLICT;
          message = `A ${exception.meta.modelName.toString().toLowerCase()} with this unique key already exists`;
          break;
        case 'P2025': // Record not found
          status = HttpStatus.NOT_FOUND;
          message = `${exception.meta.modelName} not found`;
          break;
        case 'P2003': // Foreign key constraint violation
          status = HttpStatus.BAD_REQUEST;
          message = `Bad payload for ${exception.meta.modelName.toString().toLowerCase()}. Foreign key ${exception.meta.field_name.toString().split('_')[1]} not found`;
          break;
        default:
          status = HttpStatus.BAD_REQUEST;
          message = `Prisma error: ${exception.message}`;
      }
    } else if (exception instanceof Prisma.PrismaClientUnknownRequestError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Unknown database request error occurred';
    } else if (exception instanceof Prisma.PrismaClientRustPanicError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Unexpected database panic occurred';
    } else if (exception instanceof Prisma.PrismaClientInitializationError) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Database initialization failed';
    } else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Validation error occurred';

      //Handle HttpExceptions
    } else if (exception instanceof HttpException) {
      type = 'Http Exception';
      status = exception.getStatus();
      message = exception.getResponse() as string;
    }
    response.status(status).json({
      statusCode: status,
      type,
      message,
      path: request.url,
      timestamp: new Date().toISOString(),
    });
  }
}

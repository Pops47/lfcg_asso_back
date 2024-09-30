import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';

export const validationPipeOptions = {
  exceptionFactory: (errors: ValidationError[]) => {
    const formattedErrors = errors.map((error) => ({
      field: error.property,
      constraints: Object.values(error.constraints || {}),
    }));
    return new HttpException(
      {
        statusCode: HttpStatus.BAD_REQUEST,
        type: 'Bad Request',
        message: 'Validation error',
        details: formattedErrors,
        timestamp: new Date().toISOString(),
      },
      HttpStatus.BAD_REQUEST,
    );
  },
};

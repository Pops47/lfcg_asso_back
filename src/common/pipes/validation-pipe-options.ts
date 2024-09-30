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
        message: 'Validation error',
        errors: formattedErrors,
      },
      HttpStatus.BAD_REQUEST,
    );
  },
};

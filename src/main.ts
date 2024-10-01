import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './common/filters/custom-exceptions.filter';
import { validationPipeOptions } from './common/pipes/validation-pipe-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.useGlobalFilters(new CustomExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();

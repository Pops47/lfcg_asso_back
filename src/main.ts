import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CustomExceptionFilter } from './common/filters/custom-exceptions.filter';
import { validationPipeOptions } from './common/pipes/validation-pipe-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  // ValidationPipe and ExceptionsFilter
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.useGlobalFilters(new CustomExceptionFilter());

  // Swagger (OpenAPI) configuration
  const config = new DocumentBuilder()
    .setTitle('lfcg_asso_API')
    .setDescription('The API for LFCG Asso project')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //start server
  await app.listen(process.env.PORT || 3000, () =>
    console.log(
      `🚀🚀🚀 Server succesfully started on port ${process.env.PORT}! 🚀🚀🚀`,
    ),
  );
}
bootstrap();

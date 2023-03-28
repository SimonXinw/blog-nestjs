import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new Logger(), // 配置日志
  });

  // 全局校验
  app.useGlobalPipes(new ValidationPipe());

  //注入文档
  const options = new DocumentBuilder()
    .setTitle('Api example')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('Api/V1')
    .build();

  const swaggerDocument = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, swaggerDocument);

  // 监听端口
  await app.listen(8888);
}

bootstrap();

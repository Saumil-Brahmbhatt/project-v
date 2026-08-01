import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // API Version Prefix
  app.setGlobalPrefix('api/v1');

  // Enable CORS
  app.enableCors({
    origin: ['http://localhost:3000'],
    credentials: true,
  });

  // Global Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = 3001;

  await app.listen(port);

  console.log('');
  console.log('🏐 Project V Server');
  console.log(`🚀 Running on http://localhost:${port}/api/v1`);
  console.log(`❤️ Health: http://localhost:${port}/api/v1/health`);
  console.log('');
}

void bootstrap();

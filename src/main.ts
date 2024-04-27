import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
    
    console.log('Application is running on: http://localhost:3000');
  } catch (error) {
    console.error('Error starting NestJS application:', error);
  }
}

bootstrap();

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

//create logger instance
const logger = new Logger('Main');

//create microservices options
const microservicesOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379'
  }
}

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microservicesOptions);
  app.listen();
}
bootstrap();

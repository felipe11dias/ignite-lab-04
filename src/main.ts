import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Cria a aplicação
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Ganti dengan origin frontend Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Mengizinkan pengiriman kredensial seperti cookies atau header otorisasi
    allowedHeaders: 'Content-Type, Authorization', // Mengizinkan header ini
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

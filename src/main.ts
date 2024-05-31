import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://tp-service-web.onrender.com', // l'URL de votre application React
    methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
    credentials: true, // Si vous utilisez des cookies d'authentification
  });
  await app.listen(3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

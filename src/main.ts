import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://tp-service-web.onrender.com', 'http://localhost:3000'], // l'URL de votre application React
    methods: ['*'],
    credentials: true, // Si vous utilisez des cookies d'authentification
    allowedHeaders: ['*'],
  });
  await app.listen(3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

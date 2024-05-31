import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // l'URL de votre application React
    methods: 'GET,HEAD,PUT,POST,DELETE,OPTIONS',
    credentials: true, // Si vous utilisez des cookies d'authentification
  });
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

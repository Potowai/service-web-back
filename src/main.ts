import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'https://melodle-one.vercel.app','https://melodle.netlify.app'], // l'URL de votre application React
    methods: ['*'],
    credentials: true, // Si vous utilisez des cookies d'authentification
    allowedHeaders: ['*'],
  });

  await app.listen(3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

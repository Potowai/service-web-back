import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Utilisation de Helmet pour sécuriser les en-têtes HTTP

  // Ajout du middleware CORS
  app.enableCors({
    origin: [
      'https://melodle.netlify.app',
       // Ajoutez le domaine de votre frontend déployé
       'https://melodle-one.vercel.app',
      'http://localhost:3000', // Pour le développement local
    ],
    methods: ['*'],
    allowedHeaders: ['*'],
    credentials: true,
  });

  await app.listen(process.env.PORT || 3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

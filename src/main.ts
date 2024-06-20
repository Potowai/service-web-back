import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Utilisation de Helmet pour sécuriser les en-têtes HTTP

  // Ajout du middleware CORS
  app.enableCors({
    origin: [
      'https://melodle.netlify.app', // Ajoutez le domaine de votre frontend déployé
      'http://localhost:3000', // Pour le développement local
    ],
    methods: ['*'],
    allowedHeaders: ['*'],
    credentials: true,
  });

  // Ajout du middleware pour gérer les requêtes preflight OPTIONS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://melodle.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(204);
    }
    next();
  });

  await app.listen(process.env.PORT || 3005);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();

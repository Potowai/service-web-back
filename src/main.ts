import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API MELODLE')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
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

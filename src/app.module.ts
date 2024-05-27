import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusiqueModule } from './musique/musique.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartieModule } from './partie/partie.module';
import { SourceModule } from './source/source.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    MusiqueModule,
    PartieModule,
    SourceModule,
    UtilisateurModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

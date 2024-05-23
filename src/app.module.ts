import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MusiqueModule } from './musique/musique.module';
import * as dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SourceService } from './source/source.service';
import { PartieService } from './partie/partie.service';
import { UtilisateurService } from './utilisateur/utilisateur.service';
import { PartieController } from './partie/partie.controller';
import { PartieModule } from './partie/partie.module';

dotenv.config();

@Module({
  imports: [
    MusiqueModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: { rejectUnauthorized: false },
    }),
    PartieModule,
  ],
  controllers: [AppController, PartieController],
  providers: [AppService, SourceService, PartieService, UtilisateurService],
})
export class AppModule {}

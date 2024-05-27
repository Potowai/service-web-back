import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { UtilisateurService } from './utilisateur.service';
import { Utilisateur } from './entities/utilisateur.entity';

@Controller('utilisateurs')
export class UtilisateurController {
  constructor(private readonly utilisateurService: UtilisateurService) {}

  @Get()
  findAll(): Promise<Utilisateur[]> {
    return this.utilisateurService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Utilisateur> {
    return this.utilisateurService.findOne(id);
  }

  @Post()
  create(@Body() utilisateur: Utilisateur): Promise<Utilisateur> {
    return this.utilisateurService.create(utilisateur);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() utilisateur: Utilisateur,
  ): Promise<void> {
    return this.utilisateurService.update(id, utilisateur);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.utilisateurService.remove(id);
  }
}

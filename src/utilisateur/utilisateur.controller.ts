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

  @Get(':idOrPseudo')
  findOne(@Param('idOrPseudo') idOrPseudo: string): Promise<Utilisateur> {
    if (isNaN(Number(idOrPseudo))) {
      return this.utilisateurService.findOneByPseudo(idOrPseudo);
    }
    return this.utilisateurService.findOne(Number(idOrPseudo));
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

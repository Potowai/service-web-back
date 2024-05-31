import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PartieService } from './partie.service';
import { Partie } from './entities/partie.entity';

@Controller('parties')
export class PartieController {
  constructor(private readonly partieService: PartieService) {}

  @Get()
  findAll(): Promise<Partie[]> {
    return this.partieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Partie> {
    return this.partieService.findOne(id);
  }

  @Post()
  create(@Body() partie: Partie[]): Promise<Partie[]> {
    return this.partieService.create(partie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() partie: Partie): Promise<void> {
    return this.partieService.update(id, partie);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.partieService.remove(id);
  }
}

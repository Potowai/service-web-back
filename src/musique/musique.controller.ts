import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MusiqueService } from './musique.service';

@Controller('musiques')
export class MusiqueController {
  constructor(private readonly musiqueService: MusiqueService) {}

  @Post()
  create(@Body() createMusiqueDto: CreateMusiqueDto) {
    return this.musiqueService.create(createMusiqueDto);
  }

  @Get()
  findAll() {
    return this.musiqueService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.musiqueService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.musiqueService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { MusiqueService } from './musique.service';
import { Musique } from './entities/musique.entity';

@Controller('musiques')
export class MusiqueController {
  constructor(private readonly musiqueService: MusiqueService) {}

  @Post()
  create(@Body() body: Musique[]) {
    return this.musiqueService.create(body);
  }

  @Get()
  async findAll(@Query('style') style: string) {
    if (style) {
      return this.musiqueService.findByStyle(style);
    }
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

  @Put(':id')
  update(@Param('id') id: string, @Body() body: Musique) {
    return this.musiqueService.update(+id, body);
  }
}

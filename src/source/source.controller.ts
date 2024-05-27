import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { SourceService } from './source.service';
import { Source } from './entities/source.entity';

@Controller('sources')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @Get()
  findAll(): Promise<Source[]> {
    return this.sourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Source> {
    return this.sourceService.findOne(id);
  }

  @Post()
  create(@Body() source: Source): Promise<Source> {
    return this.sourceService.create(source);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() source: Source): Promise<void> {
    return this.sourceService.update(id, source);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.sourceService.remove(id);
  }
}

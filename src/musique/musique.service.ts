import { Injectable } from '@nestjs/common';
import { CreateMusiqueDto } from './dto/create-musique.dto';
import { UpdateMusiqueDto } from './dto/update-musique.dto';

@Injectable()
export class MusiqueService {
  create(createMusiqueDto: CreateMusiqueDto) {
    return 'This action adds a new musique';
  }

  findAll() {
    return `This action returns all musique`;
  }

  findOne(id: number) {
    return `This action returns a #${id} musique`;
  }

  update(id: number, updateMusiqueDto: UpdateMusiqueDto) {
    return `This action updates a #${id} musique`;
  }

  remove(id: number) {
    return `This action removes a #${id} musique`;
  }
}

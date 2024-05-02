import { Test, TestingModule } from '@nestjs/testing';
import { MusiqueController } from './musique.controller';
import { MusiqueService } from './musique.service';

describe('MusiqueController', () => {
  let controller: MusiqueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusiqueController],
      providers: [MusiqueService],
    }).compile();

    controller = module.get<MusiqueController>(MusiqueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { PartieController } from './partie.controller';

describe('PartieController', () => {
  let controller: PartieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartieController],
    }).compile();

    controller = module.get<PartieController>(PartieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

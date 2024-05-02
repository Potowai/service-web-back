import { Test, TestingModule } from '@nestjs/testing';
import { MusiqueService } from './musique.service';

describe('MusiqueService', () => {
  let service: MusiqueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusiqueService],
    }).compile();

    service = module.get<MusiqueService>(MusiqueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

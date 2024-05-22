import { Test, TestingModule } from '@nestjs/testing';
import { PartieService } from './partie.service';

describe('PartieService', () => {
  let service: PartieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PartieService],
    }).compile();

    service = module.get<PartieService>(PartieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MusiqueController } from '../musique/musique.controller';
import { MusiqueService } from '../musique/musique.service';
import { Musique } from '../musique/entities/musique.entity';

describe('MusiqueController', () => {
  let controller: MusiqueController;
  let service: MusiqueService;

  const mockMusiqueService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findByStyle: jest.fn(),
    findOne: jest.fn(),
    remove: jest.fn(),
    update: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusiqueController],
      providers: [
        {
          provide: MusiqueService,
          useValue: mockMusiqueService,
        },
      ],
    }).compile();

    controller = module.get<MusiqueController>(MusiqueController);
    service = module.get<MusiqueService>(MusiqueService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create musiques', async () => {
    const musiques: Musique[] = [
      { id: 1, titre: 'Test', auteur: 'Author', style: 'Style', url: 'url' },
    ];
    await controller.create(musiques);
    expect(service.create).toHaveBeenCalledWith(musiques);
  });

  it('should return all musiques', async () => {
    await controller.findAll('');
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return musiques by style', async () => {
    const style = 'Rock';
    await controller.findAll(style);
    expect(service.findByStyle).toHaveBeenCalledWith(style);
  });

  it('should return a single musique by id', async () => {
    const id = '1';
    await controller.findOne(id);
    expect(service.findOne).toHaveBeenCalledWith(+id);
  });

  it('should remove a musique by id', async () => {
    const id = '1';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(+id);
  });

  it('should update a musique by id', async () => {
    const id = '1';
    const musique: Musique = {
      id: 1,
      titre: 'Updated',
      auteur: 'Author',
      style: 'Style',
      url: 'url',
    };
    await controller.update(id, musique);
    expect(service.update).toHaveBeenCalledWith(+id, musique);
  });
});

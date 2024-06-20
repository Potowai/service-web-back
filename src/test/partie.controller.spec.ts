import { Test, TestingModule } from '@nestjs/testing';
import { PartieController } from '../partie/partie.controller';
import { PartieService } from '../partie/partie.service';
import { Partie } from '../partie/entities/partie.entity';
import { Utilisateur } from '../utilisateur/entities/utilisateur.entity';

describe('PartieController', () => {
  let controller: PartieController;
  let service: PartieService;

  const mockPartieService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PartieController],
      providers: [
        {
          provide: PartieService,
          useValue: mockPartieService,
        },
      ],
    }).compile();

    controller = module.get<PartieController>(PartieController);
    service = module.get<PartieService>(PartieService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all parties', async () => {
    const result = [
      {
        id: 1,
        points: 100,
        date: new Date(),
        style: 'Rock',
        utilisateur: {} as Utilisateur,
      },
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(result as Partie[]);
    expect(await controller.findAll()).toBe(result);
  });

  it('should return a single party', async () => {
    const result = {
      id: 1,
      points: 100,
      date: new Date(),
      style: 'Rock',
      utilisateur: {} as Utilisateur,
    };
    jest.spyOn(service, 'findOne').mockResolvedValue(result as Partie);
    expect(await controller.findOne(1)).toBe(result);
  });

  it('should create a new party', async () => {
    const dto = [
      {
        id: 1,
        points: 100,
        date: new Date(),
        style: 'Rock',
        utilisateur: {} as Utilisateur,
      },
    ];
    jest.spyOn(service, 'create').mockResolvedValue(dto as Partie[]);
    expect(await controller.create(dto)).toBe(dto);
  });

  it('should update a party', async () => {
    const dto = {
      id: 1,
      points: 150,
      date: new Date(),
      style: 'Jazz',
      utilisateur: {} as Utilisateur,
    };
    jest.spyOn(service, 'update').mockResolvedValue(undefined);
    expect(await controller.update(1, dto)).toBeUndefined();
  });

  it('should delete a party', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(undefined);
    expect(await controller.remove(1)).toBeUndefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { Utilisateur } from '../utilisateur/entities/utilisateur.entity';
import { UtilisateurController } from '../utilisateur/utilisateur.controller';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

describe('UtilisateurController', () => {
  let controller: UtilisateurController;
  let service: UtilisateurService;

  const mockUtilisateurService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    findOneByPseudo: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UtilisateurController],
      providers: [
        {
          provide: UtilisateurService,
          useValue: mockUtilisateurService,
        },
      ],
    }).compile();

    controller = module.get<UtilisateurController>(UtilisateurController);
    service = module.get<UtilisateurService>(UtilisateurService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of utilisateurs', async () => {
    const result = [{ id: 1, pseudo: 'testuser', parties: [] }];
    jest.spyOn(service, 'findAll').mockResolvedValue(result as Utilisateur[]);
    expect(await controller.findAll()).toBe(result);
  });

  it('should return a single utilisateur by id', async () => {
    const result = { id: 1, pseudo: 'testuser', parties: [] };
    jest.spyOn(service, 'findOne').mockResolvedValue(result as Utilisateur);
    expect(await controller.findOne('1')).toBe(result);
  });

  it('should return a single utilisateur by pseudo', async () => {
    const result = { id: 1, pseudo: 'testuser', parties: [] };
    jest
      .spyOn(service, 'findOneByPseudo')
      .mockResolvedValue(result as Utilisateur);
    expect(await controller.findOne('testuser')).toBe(result);
  });

  it('should create a new utilisateur', async () => {
    const dto = { pseudo: 'newuser', parties: [] };
    const result = { id: 1, ...dto };
    jest.spyOn(service, 'create').mockResolvedValue(result as Utilisateur);
    expect(await controller.create(dto as Utilisateur)).toBe(result);
  });

  it('should update an utilisateur', async () => {
    const dto = { pseudo: 'updateduser', parties: [] };
    jest.spyOn(service, 'update').mockResolvedValue(undefined);
    expect(await controller.update(1, dto as Utilisateur)).toBeUndefined();
  });

  it('should delete an utilisateur', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(undefined);
    expect(await controller.remove(1)).toBeUndefined();
  });
});

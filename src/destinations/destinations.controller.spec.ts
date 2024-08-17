import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { Photo } from '../photos/entities/photo.entity';

describe('DestinationsController', () => {
  let controller: DestinationsController;
  let destinationService: DestinationsService;

  const photos = new Photo();
  photos.url = 'http://photo1.jpg';

  const destination = {
    id: '1',
    photos: [photos],
    name: 'Test',
    target: 'Test target',
    descriptiveText: 'Text description',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationsController],
      providers: [
        {
          provide: DestinationsService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<DestinationsController>(DestinationsController);
    destinationService = module.get<DestinationsService>(DestinationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('destinationService should be defined', () => {
    expect(destinationService).toBeDefined();
  });

  describe('create', () => {
    it('should return an object of destination', async () => {
      const createDestinationDto = {
        photos: [
          { url: 'http://photo1.jpg', description: 'photo description' },
        ],
        name: 'Test',
        target: 'Test target',
        descriptiveText: 'Text description',
      };
      const result = { data: destination };
      jest.spyOn(destinationService, 'create').mockResolvedValue(destination);

      expect(await controller.create(createDestinationDto)).toEqual(result);
    });
  });

  describe('findAll', () => {
    it('should return an object of destination', async () => {
      jest
        .spyOn(destinationService, 'findAll')
        .mockResolvedValue([destination]);

      expect(await controller.findAll('')).toStrictEqual({
        data: [destination],
      });
    });
  });

  describe('findOne', () => {
    it('should return an array of destinations', async () => {
      const result = {
        data: destination,
      };

      jest.spyOn(destinationService, 'findOne').mockResolvedValue(destination);

      expect(await controller.findOne('1')).toEqual(result);
    });
  });

  describe('update', () => {
    it('should return a sucesseful message', async () => {
      const result = {
        message: `Destination #${destination.id} was updated`,
      };

      expect(await controller.update('1', { name: 'Netherlands' })).toEqual(
        result,
      );
    });
  });

  describe('delete', () => {
    it('should return a sucesseful message', async () => {
      const result = {
        message: `Destination #${destination.id} was deleted`,
      };

      expect(await controller.remove('1')).toEqual(result);
    });
  });
});

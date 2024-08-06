import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';
import { ConfigService } from '@nestjs/config';
import { CohereClient } from 'cohere-ai';

describe('DestinationsService', () => {
  let service: DestinationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DestinationsService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('test-api-key'),
          },
        },
      ],
    }).compile();

    service = module.get<DestinationsService>(DestinationsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a destination with AI auto-generating text if descriptive text is not provided', async () => {
      const destination: Destination = {
        id: '1',
        name: 'Test Destination',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target',
      };
      const expectedText = 'Text generated by Cohere AI';

      CohereClient.prototype.chat = jest
        .fn()
        .mockResolvedValue({ text: expectedText });

      const result = await service.create(destination);

      expect(result).toEqual({
        ...destination,
        descriptive_text: expectedText,
      });
      expect(CohereClient.prototype.chat).toHaveBeenCalled();
    });

    it('should create a destination', async () => {
      const destination: Destination = {
        id: '1',
        name: 'Test Destination',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target',
        descriptive_text: 'Descriptive text',
      };

      const result = await service.create(destination);

      expect(result).toEqual(destination);
      expect(CohereClient.prototype.chat).not.toHaveBeenCalled();
    });
  });

  describe('findAll', () => {
    it('should find all destinations', async () => {
      const destination: Destination = {
        id: '1',
        name: 'Test Destination',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target',
        descriptive_text: 'Descriptive text',
      };
      await service.create(destination);

      const result = await service.findAll();

      expect(result).toStrictEqual([destination]);
    });

    it('should return filtered destinations by name', async () => {
      const destination1: Destination = {
        id: '1',
        name: 'Test Destination 1',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target 1',
        descriptive_text: 'Texto 1',
      };

      const destination2: Destination = {
        id: '2',
        name: 'Test Destination 2',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target 2',
        descriptive_text: 'Texto 2',
      };

      await service.create(destination1);
      await service.create(destination2);

      const result = await service.findAll('Test Destination 1');

      expect(result).toEqual([destination1]);
    });
  });

  describe('findOne', () => {
    it('should return a single destination by id', async () => {
      const destination: Destination = {
        id: '1',
        name: 'Test Destination',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target',
        descriptive_text: 'Descriptive text',
      };
      await service.create(destination);

      const result = await service.findOne('1');

      expect(result).toEqual(destination);
    });

    it('should throw an error if destination not found', async () => {
      await expect(service.findOne('invalid-id')).rejects.toThrow(
        'Destination not found',
      );
    });
  });

  describe('update', () => {
    it('should update a destination', async () => {
      const destination: Destination = {
        id: '1',
        name: 'Test Destination',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target',
        descriptive_text: 'Descriptive text',
      };
      await service.create(destination);

      const updateDto = { name: 'Updated Destination' };
      const result = await service.update('1', updateDto);

      expect(result).toEqual({ ...destination, ...updateDto });
    });
  });

  describe('remove', () => {
    it('should remove a destination', async () => {
      const destination: Destination = {
        id: '1',
        name: 'Test Destination',
        photo_1: 'photo1.jpg',
        photo_2: 'photo2.jpg',
        target: 'A destination target',
        descriptive_text: 'Descriptive text',
      };
      await service.create(destination);

      const result = await service.remove('1');

      expect(result).toEqual(destination);
      expect(await service.findAll()).toEqual([]);
    });
  });
});

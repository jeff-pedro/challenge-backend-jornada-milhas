import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';

describe('DestinationsService', () => {
  let service: DestinationsService;
  let destinationObject: Destination;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationsService],
    }).compile();

    service = module.get<DestinationsService>(DestinationsService);

    destinationObject = {
      id: 'abcd',
      photo: 'berlin.jpg',
      name: 'Berlin',
      price: 7000,
    };

    await service.create(destinationObject);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an destination', async () => {
    expect(await service.create(destinationObject)).toBe(destinationObject);
  });

  it('should find all destinations', async () => {
    expect(await service.findAll()).toStrictEqual([destinationObject]);
  });

  it('should find all destinations by name', async () => {
    const destinationByName = {
      id: 'aabb',
      photo: 'paris.jpg',
      name: 'Paris',
      price: 9000,
    };

    await service.create(destinationByName);

    expect(await service.findAll('Paris')).toStrictEqual([destinationByName]);
  });

  it('should find one destination by id', async () => {
    expect(await service.findOne('abcd')).toStrictEqual(destinationObject);
  });

  it('should update one destination', async () => {
    const destinationUpdated = { price: 9500 };
    Object.assign(destinationObject, destinationUpdated);

    expect(await service.update('abcd', destinationUpdated)).toStrictEqual(
      destinationObject,
    );
  });

  it('should remove one destination', async () => {
    expect(await service.remove('abcd')).toStrictEqual(destinationObject);
  });
});

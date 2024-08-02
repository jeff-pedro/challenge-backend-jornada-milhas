import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';
import { ConfigModule } from '@nestjs/config';

describe('DestinationsService', () => {
  let service: DestinationsService;
  let destinationObject: Destination;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DestinationsService],
      imports: [ConfigModule.forRoot()],
    }).compile();

    service = module.get<DestinationsService>(DestinationsService);

    destinationObject = {
      id: 'abcd',
      name: 'Berlin',
      photo_1: 'berlin1.jpg',
      photo_2: 'berlin2.jpg',
      target: 'Go to Berlin in 2025',
      descriptive_text: 'Bla bla bla',
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
      id: 'bdca',
      photo_1: 'paris1.jpg',
      photo_2: 'paris2.jpg',
      name: 'Paris',
      target: 'Go to Paris in 2025',
      descriptive_text: 'Bla bla bla',
    };

    await service.create(destinationByName);

    expect(await service.findAll('Paris')).toStrictEqual([destinationByName]);
  });

  it('should find one destination by id', async () => {
    expect(await service.findOne('abcd')).toStrictEqual(destinationObject);
  });

  it('should update one destination', async () => {
    const destinationUpdated = { photo_1: 'photo1.jpg' };
    Object.assign(destinationObject, destinationUpdated);

    expect(await service.update('abcd', destinationUpdated)).toStrictEqual(
      destinationObject,
    );
  });

  it('should remove one destination', async () => {
    expect(await service.remove('abcd')).toStrictEqual(destinationObject);
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';

describe('DestinationsController', () => {
  let controller: DestinationsController;
  let service: DestinationsService;
  let destinationObject: Destination;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationsController],
      providers: [DestinationsService],
    }).compile();

    controller = module.get<DestinationsController>(DestinationsController);
    service = module.get<DestinationsService>(DestinationsService);

    destinationObject = {
      id: 'abcd',
      photo: 'berlin.jpg',
      name: 'Berlin',
      price: 7000,
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call create route handler method', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(destinationObject);

    const result = await controller.create(destinationObject);

    expect(result).toStrictEqual({ data: destinationObject });
  });

  it('should call findAll route handler method', async () => {
    jest.spyOn(service, 'findAll').mockResolvedValue([destinationObject]);
    expect(await controller.findAll()).toStrictEqual({
      data: [destinationObject],
    });
  });

  it('should call findOne route handler method', async () => {
    jest.spyOn(service, 'findOne').mockResolvedValue(destinationObject);
    expect(await controller.findOne('abcd')).toStrictEqual({
      data: destinationObject,
    });
  });

  it('should call update route handler method', async () => {
    jest.spyOn(service, 'update').mockResolvedValue(destinationObject);

    expect(
      await controller.update('abcd', { name: 'Netherlands' }),
    ).toStrictEqual({
      message: 'Destination updated',
      data: destinationObject,
    });
  });

  it('should call delete route handler mothod', async () => {
    jest.spyOn(service, 'remove').mockResolvedValue(destinationObject);

    expect(await controller.remove('abcd')).toStrictEqual({
      message: `Destination #${destinationObject.id} was deleted`,
    });
  });
});

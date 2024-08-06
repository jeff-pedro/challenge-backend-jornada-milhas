import { Test, TestingModule } from '@nestjs/testing';
import { DestinationsController } from './destinations.controller';
import { DestinationsService } from './destinations.service';
import { Destination } from './entities/destination.entity';
import { ListDestinationDto } from './dto/list-destination.dto';
import { ConfigModule } from '@nestjs/config';

describe('DestinationsController', () => {
  let controller: DestinationsController;
  let service: DestinationsService;
  let destinationObject: Destination;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DestinationsController],
      providers: [DestinationsService],
      imports: [ConfigModule.forRoot()],
    }).compile();

    controller = module.get<DestinationsController>(DestinationsController);
    service = module.get<DestinationsService>(DestinationsService);

    destinationObject = {
      id: 'abcd',
      photo_1: 'berlin1.jpg',
      photo_2: 'berlin2.jpg',
      name: 'Berlin',
      target: 'Go to Berlin in 2025',
      descriptive_text: 'Bla bla bla',
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
    expect(await controller.findAll('')).toStrictEqual({
      data: [destinationObject],
    });
  });

  it('should call findOne route handler method', async () => {
    const listDestination = new ListDestinationDto(
      destinationObject.photo_1,
      destinationObject.photo_2,
      destinationObject.name,
      destinationObject.target,
      destinationObject.descriptive_text,
    );
    jest.spyOn(service, 'findOne').mockResolvedValue(destinationObject);
    expect(await controller.findOne('abcd')).toStrictEqual({
      data: listDestination,
    });
  });

  it('should call findOne route handler method', async () => {
    const listDestination = new ListDestinationDto(
      destinationObject.photo_1,
      destinationObject.photo_2,
      destinationObject.name,
      destinationObject.target,
      destinationObject.descriptive_text,
    );
    jest.spyOn(service, 'findOne').mockResolvedValue(destinationObject);
    expect(await controller.findOne('abcd')).toStrictEqual({
      data: listDestination,
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

import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { DestinationsService } from '../../src/destinations/destinations.service';
import { DestinationsModule } from '../../src/destinations/destinations.module';

describe('DestinationsController (e2e)', () => {
  let app: INestApplication;
  const destinationObject = {
    id: 'abcd',
    name: 'Berlin',
    photo_1: 'berlin1.jpg',
    photo_2: 'berlin2.jpg',
    target: 'Go to Berlin in 2025',
    descriptive_text: 'Bla bla bla...',
  };

  let destinationsService: DestinationsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [DestinationsModule],
      providers: [DestinationsService],
    }).compile();

    destinationsService =
      moduleRef.get<DestinationsService>(DestinationsService);

    app = moduleRef.createNestApplication();

    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  describe('/GET destinations', () => {
    it('should return status 200', async () => {
      return await request(app.getHttpServer())
        .get('/destinations')
        .expect(200)
        .expect({
          data: [],
        });
    });
  });

  describe('/GET/:id destinations', () => {
    it('should return status 200', () => {
      jest
        .spyOn(destinationsService, 'findOne')
        .mockResolvedValue(destinationObject);
      return request(app.getHttpServer()).get('/destinations/1234').expect(200);
    });
  });

  describe('/POST destinations', () => {
    it('should return status 201', async () => {
      return request(app.getHttpServer())
        .post('/destinations')
        .send({
          name: 'Amsterdam',
          photo_1: 'amsterdam1.jpg',
          photo_2: 'amsterdam2.jpg',
          target: 'Go to Amsterdam in 2030',
          descriptive_text: 'Bla bla bla...',
        })
        .expect(201);
    });

    it('should return an error when receiving invalid type data', async () => {
      const res = await request(app.getHttpServer())
        .post('/destinations')
        .send({
          photo: true,
          name: 1,
          price: '4500.00',
        });

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(Array),
          error: expect.any(String),
          statusCode: 400,
        }),
      );
    });

    it('should return an error when the property is empty', async () => {
      const res = await request(app.getHttpServer())
        .post('/destinations')
        .send({
          photo: 'amsterdam.jpg',
          name: '',
          price: 5800,
        });

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(Array),
          error: expect.any(String),
          statusCode: 400,
        }),
      );
    });

    it('should return an error when the property does not exist', async () => {
      const res = await request(app.getHttpServer())
        .post('/destinations')
        .send({
          name: 'Berlin',
          photo: 'berlin.jpg',
          price: 4850,
          nonExistentProperty: '',
        });

      expect(res.body).toEqual(
        expect.objectContaining({
          message: expect.any(Array),
          error: expect.any(String),
          statusCode: 400,
        }),
      );
    });
  });

  describe('/PATCH destinations', () => {
    it('should return status 200', async () => {
      jest
        .spyOn(destinationsService, 'update')
        .mockResolvedValue(destinationObject);
      return request(app.getHttpServer())
        .patch('/destinations/abcd')
        .send({
          name: 'Pernambuco',
        })
        .expect(200);
    });
  });

  describe('/DELETE destinations', () => {
    it('should return status 200', async () => {
      jest
        .spyOn(destinationsService, 'remove')
        .mockResolvedValue(destinationObject);
      return request(app.getHttpServer())
        .delete('/destinations/abcd')
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});

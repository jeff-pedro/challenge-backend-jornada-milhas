import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { TestimonialsService } from '../../src/testimonials/testimonials.service';
import TestimonialsModule from '../../src/testimonials/testimonials.module';

describe('TestimonialsController (e2e)', () => {
  let app: INestApplication;
  const testimonialObject = {
    id: 'abcd',
    name: 'John',
    photo: 'profile.jpg',
    testimonial: 'Bla bla bla',
  };

  let testimonialsService: TestimonialsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [TestimonialsModule],
      providers: [TestimonialsService],
    }).compile();

    testimonialsService =
      moduleRef.get<TestimonialsService>(TestimonialsService);

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

  describe('/GET testimonials', () => {
    it('should return status 200', async () => {
      await testimonialsService.create({
        id: '1',
        name: 'John',
        photo: 'profile.jpg',
        testimonial: 'Bla bla bla ...',
      });

      return await request(app.getHttpServer())
        .get('/testimonials')
        .expect(200);
    });
  });

  describe('/GET/:id testimonials', () => {
    it('should return status 200', () => {
      jest
        .spyOn(testimonialsService, 'findOne')
        .mockResolvedValue(testimonialObject);
      return request(app.getHttpServer()).get('/testimonials/1234').expect(200);
    });
  });

  describe('/POST testimonials', () => {
    it('should return status 201', async () => {
      return request(app.getHttpServer())
        .post('/testimonials')
        .send({
          name: 'John',
          photo: 'profile.jpg',
          testimonial: 'Bla bla bla ...',
        })
        .expect(201);
    });

    it('should return an error when receiving invalid type data', async () => {
      const res = await request(app.getHttpServer())
        .post('/testimonials')
        .send({
          name: 1,
          photo: true,
          testimonial: false,
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
        .post('/testimonials')
        .send({
          name: '',
          photo: 'profile.jpg',
          testimonial: 'Bla bla bla ...',
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
        .post('/testimonials')
        .send({
          name: 'John',
          photo: 'profile.jpg',
          testimonial: 'Bla bla bla ...',
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

  describe('/PUT testimonials', () => {
    it('should return status 200', async () => {
      jest
        .spyOn(testimonialsService, 'update')
        .mockResolvedValue(testimonialObject);
      return request(app.getHttpServer())
        .patch('/testimonials/abcd')
        .send({
          name: 'John Doe',
        })
        .expect(200);
    });
  });

  describe('/DELETE testimonials', () => {
    it('should return status 200', async () => {
      jest
        .spyOn(testimonialsService, 'remove')
        .mockResolvedValue(testimonialObject);
      return request(app.getHttpServer())
        .delete('/testimonials/abcd')
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});

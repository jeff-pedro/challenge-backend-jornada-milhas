import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
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
  const testimonialsService = {
    findAll: () => [testimonialObject],
    findById: () => testimonialObject,
    create: () => testimonialObject,
    update: () => testimonialObject,
    remove: () => testimonialObject,
  };

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [TestimonialsModule],
    })
      .overrideProvider(TestimonialsService)
      .useValue(testimonialsService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET testimonials', () => {
    return request(app.getHttpServer())
      .get('/testimonials')
      .expect(200)
      .expect({
        data: testimonialsService.findAll(),
      });
  });

  it('/GET/:id testimonials', () => {
    return request(app.getHttpServer()).get('/testimonials/abcd').expect(200);
  });

  it('/POST testimonials', async () => {
    return request(app.getHttpServer())
      .post('/testimonials')
      .send({
        name: 'John',
        photo: 'profile.jpg',
        testimonial: 'Bla bla bla ...',
      })
      .expect(201);
  });

  it('/PUT testimonials', async () => {
    return request(app.getHttpServer())
      .put('/testimonials/abcd')
      .send({
        name: 'John Doe',
      })
      .expect(200);
  });

  it('/DELETE testimonials', async () => {
    return request(app.getHttpServer())
      .delete('/testimonials/abcd')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});

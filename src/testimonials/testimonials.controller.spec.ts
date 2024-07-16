import { Test } from '@nestjs/testing';
import { TestimonialsController } from './testimonials.controller';
import { TestimonialsService } from './testimonials.service';

describe('TestimonialsController', () => {
  let testimonialsService: TestimonialsService;
  let testimonialsController: TestimonialsController;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TestimonialsController],
      providers: [TestimonialsService],
    }).compile();

    testimonialsService =
      moduleRef.get<TestimonialsService>(TestimonialsService);
    testimonialsController = moduleRef.get<TestimonialsController>(
      TestimonialsController,
    );
  });

  describe('findAll', () => {
    it('should return an array of testimonials', async () => {
      const testimonialsList = [
        {
          id: 'abcd',
          name: 'Foo',
          photo: 'foo.jpg',
          testimonial: 'bla bla bla',
        },
      ];
      const result = { data: testimonialsList };
      jest
        .spyOn(testimonialsService, 'findAll')
        .mockResolvedValue(testimonialsList);

      expect(await testimonialsController.findAll()).toEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return an object of testimonial', async () => {
      const id = 'abcd';
      const testimonialObject = {
        id: 'abcd',
        name: 'Foo',
        photo: 'foo.jpg',
        testimonial: 'bla bla bla',
      };
      const result = { data: testimonialObject };
      jest
        .spyOn(testimonialsService, 'findById')
        .mockResolvedValue(testimonialObject);

      expect(await testimonialsController.findOne(id)).toEqual(result);
    });
  });

  describe('create', () => {
    it('should return an object with a successful message', async () => {
      const result = { message: 'Testimonial was created' };
      const object = {
        id: 'abcd',
        name: 'Foo',
        photo: 'foo.jpg',
        testimonial: 'bla bla bla',
      };
      jest.spyOn(testimonialsService, 'create').mockResolvedValue(undefined);

      expect(await testimonialsController.create(object)).toEqual(result);
    });
  });

  describe('update', () => {
    it('should return an object with a message and the data updated', async () => {
      const id = 'abcd';
      const dataToUpdate = { name: 'Bar' };
      const retunedObject = {
        id: 'abcd',
        name: 'Bar',
        photo: 'foo.jpg',
        testimonial: 'bla bla bla',
      };
      const result = {
        message: 'Testimonial updated',
        data: { ...retunedObject },
      };
      jest
        .spyOn(testimonialsService, 'update')
        .mockResolvedValue(retunedObject);

      expect(await testimonialsController.update(id, dataToUpdate)).toEqual(
        result,
      );
    });
  });

  describe('delete', () => {
    it('should return a message with the id of the testimonial deleted', async () => {
      const id = 'abcd';
      const returnedObject = {
        id: 'abcd',
        name: 'Bar',
        photo: 'foo.jpg',
        testimonial: 'bla bla bla',
      };
      const result = {
        message: `Testimonial #${returnedObject.id} was deleted`,
      };
      jest
        .spyOn(testimonialsService, 'remove')
        .mockResolvedValue(returnedObject);

      expect(await testimonialsController.remove(id)).toEqual(result);
    });
  });

  describe('randomTestimonials', () => {
    it('should return 3 random testimonials', async () => {
      const result = [
        {
          id: 'abcd1',
          name: 'Foo',
          photo: 'foo.jpg',
          testimonial: 'bla bla bla',
        },
        {
          id: 'abcd2',
          name: 'Bar',
          photo: 'bar.jpg',
          testimonial: 'bla bla bla',
        },
        {
          id: 'abcd3',
          name: 'Baz',
          photo: 'baz.jpg',
          testimonial: 'bla bla bla',
        },
      ];
      jest
        .spyOn(testimonialsService, 'getRandomTestimonials')
        .mockResolvedValue(result);

      const response = await testimonialsController.randomTestimonials();

      expect(response.data).toHaveLength(3);
    });
  });
});

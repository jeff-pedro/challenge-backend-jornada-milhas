import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialsService } from './testimonials.service';
import { Testimonial } from './entities/testimonial.entity';
import { NotFoundException } from '@nestjs/common';

describe('TestimonialsService', () => {
  let service: TestimonialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialsService],
    }).compile();

    service = module.get<TestimonialsService>(TestimonialsService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create a testimonial', async () => {
      const testimonial: Testimonial = {
        id: '1',
        name: 'Test Testimonial',
        photo: 'photo.jpg',
        testimonial: 'Text',
      };

      const result = await service.create(testimonial);

      expect(result).toEqual(testimonial);
    });
  });

  describe('findAll', () => {
    it('should find all testimonials', async () => {
      const testimonial: Testimonial = {
        id: '1',
        name: 'Test Testimonial',
        photo: 'photo.jpg',
        testimonial: 'Text',
      };
      await service.create(testimonial);

      const result = await service.findAll();

      expect(result).toStrictEqual([testimonial]);
    });

    it('should throw an error if testimonial name not found', async () => {
      const result = service.findAll();

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Any testimonial was found');
    });
  });

  describe('findOne', () => {
    it('should return a single testimonial by id', async () => {
      const testimonial: Testimonial = {
        id: '1',
        name: 'Test Testimonial',
        photo: 'photo.jpg',
        testimonial: 'Text',
      };
      await service.create(testimonial);

      const result = await service.findOne('1');

      expect(result).toEqual(testimonial);
    });

    it('should throw an error if testimonial not found', async () => {
      const result = service.findOne('invalid-id');

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Testimonial not found');
    });
  });

  describe('update', () => {
    it('should update a testimonial', async () => {
      const testimonial: Testimonial = {
        id: '1',
        name: 'Test Testimonial',
        photo: 'photo.jpg',
        testimonial: 'Text',
      };
      await service.create(testimonial);

      const updateDto = { name: 'Updated Testimonial' };
      const result = await service.update('1', updateDto);

      expect(result).toEqual({ ...testimonial, ...updateDto });
    });

    it('should throw an error if testimonial not found', async () => {
      const result = service.update('invalid-id', {
        name: 'Some testimonial ',
      });

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Testimonial not found');
    });
  });

  describe('remove', () => {
    it('should remove a testimonial', async () => {
      const testimonial: Testimonial = {
        id: '1',
        name: 'Test Testimonial',
        photo: 'photo.jpg',
        testimonial: 'Text',
      };
      await service.create(testimonial);

      const result = await service.remove('1');

      expect(result).toEqual(testimonial);
    });

    it('should throw an error if testimonial not found', async () => {
      const result = service.remove('invalid-id');

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Testimonial not found');
    });
  });

  describe('getRandomTestimonials', () => {
    it('should return an array with 3 testimonials', async () => {
      //  Creates 4 testimonials
      for (let i = 1; i < 5; i++) {
        await service.create({
          id: `a${i}`,
          name: `Test Testimonal ${i}`,
          photo: `photo${i}.jpg`,
          testimonial: 'Text',
        });
      }

      const result = await service.getRandomTestimonials();

      expect(result).toHaveLength(3);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialsService } from './testimonials.service';
import { Testimonial } from './testimonial.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { User } from '../users/user.entity';

describe('TestimonialsService', () => {
  let service: TestimonialsService;
  let testimonialRepository: Repository<Testimonial>;
  let userRepository: Repository<User>;

  const TESTIMONIAL_REPOSITORY_TOKEN = getRepositoryToken(Testimonial);
  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);

  const userMock: User = {
    id: '1',
    firstName: 'John',
    lastName: 'Wick',
    email: 'john@gmail.com',
    isActive: true,
    photo: 'url',
    password: '123',
    testimonials: [],
    createdAt: '2023-01-01',
    updatedAt: '2023-01-01',
    deletedAt: '2023-01-01',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TestimonialsService,
        {
          provide: TESTIMONIAL_REPOSITORY_TOKEN,
          useValue: {
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
          },
        },
        {
          provide: USER_REPOSITORY_TOKEN,
          useValue: {
            findOneBy: jest.fn(() => userMock),
          },
        },
      ],
    }).compile();

    service = module.get<TestimonialsService>(TestimonialsService);
    testimonialRepository = module.get<Repository<Testimonial>>(
      TESTIMONIAL_REPOSITORY_TOKEN,
    );
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('testimonialRepository should be defined', () => {
    expect(testimonialRepository).toBeDefined();
  });

  describe('create', () => {
    it('should call testimonialRepository.save with correct params', async () => {
      const testimonial = new Testimonial();

      Object.assign(testimonial, {
        testimonial: 'Text',
        user: userMock,
      });

      jest
        .spyOn(testimonialRepository, 'save')
        .mockResolvedValue({ ...testimonial, id: '1' });

      await service.create({
        userId: '1',
        testimonial: 'Text',
      });

      expect(testimonialRepository.save).toHaveBeenCalledWith(testimonial);
    });

    it('should create and return the correct object', async () => {
      const testimonial = new Testimonial();
      Object.assign(testimonial, {
        testimonial: 'Text',
        user: userMock,
      });

      jest
        .spyOn(testimonialRepository, 'save')
        .mockResolvedValue({ ...testimonial, id: '1' });

      const result = await service.create({
        userId: '1',
        testimonial: 'Text',
      });

      expect(result).toStrictEqual({
        id: '1',
        userId: '1',
        testimonial: 'Text',
      });
    });

    it('should throw an error if testimonial not found', async () => {
      jest.spyOn(userRepository, 'findOneBy').mockResolvedValueOnce(null);

      const result = service.create({
        userId: '1',
        testimonial: 'Text',
      });

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('User not found');
    });
  });

  describe('findAll', () => {
    it('should throw an error if testimonial not found', async () => {
      jest.spyOn(testimonialRepository, 'find').mockResolvedValueOnce([]);

      const result = service.findAll();

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Any testimonial was found');
    });
  });

  describe('findOne', () => {
    it('should throw an error if testimonial not found', async () => {
      jest.spyOn(testimonialRepository, 'findOne').mockResolvedValueOnce(null);

      const result = service.findOne('invalid-id');

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Testimonial not found');
    });
  });

  describe('update', () => {
    it('should throw an error if testimonial not found', async () => {
      jest
        .spyOn(testimonialRepository, 'update')
        .mockResolvedValueOnce({ affected: 0, generatedMaps: [], raw: '' });

      const result = service.update('invalid-id', {
        testimonial: 'Some testimonial',
      });

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Testimonial not found');
    });
  });

  describe('remove', () => {
    it('should throw an error if testimonial not found', async () => {
      jest
        .spyOn(testimonialRepository, 'delete')
        .mockResolvedValueOnce({ affected: 0, raw: '' });

      const result = service.remove('invalid-id');

      expect(result).rejects.toBeInstanceOf(NotFoundException);
      expect(result).rejects.toThrow('Testimonial not found');
    });
  });

  describe('getRandomTestimonials', () => {
    it('should call testimonialRepository.find with correct params', async () => {
      const options = { order: { id: 'ASC' }, take: 3 };

      await service.getRandomTestimonials();

      expect(testimonialRepository.find).toHaveBeenCalledWith(options);
    });
  });
});

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Testimonial } from './testimonial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TestimonialsService {
  private readonly testimonials: Testimonial[] = [];
  private id: number = 0;

  constructor(
    @InjectRepository(Testimonial)
    private testimonialRepository: Repository<Testimonial>,
  ) {}

  async create(testimonial: Testimonial): Promise<Testimonial> {
    try {
      return this.testimonialRepository.save(testimonial);
    } catch (error) {
      throw new BadRequestException('Something bad happened');
    }
  }

  async findAll(options?: object): Promise<Testimonial[]> {
    const testimonialSaved = await this.testimonialRepository.find(options);

    if (testimonialSaved.length === 0) {
      throw new NotFoundException('Any testimonial was found');
    }

    return testimonialSaved;
  }

  async findOne(id: string): Promise<Testimonial | null> {
    return this.testimonialRepository.findOneBy({ id });
  }

  async update(id: string, dataToUpdate: Partial<Testimonial>) {
    const testimonialToUpdate = await this.testimonialRepository.update(
      { id },
      dataToUpdate,
    );

    if (testimonialToUpdate.affected === 0) {
      throw new NotFoundException('Testimonials not found');
    }
  }

  async remove(id: string): Promise<void> {
    const testimonialToDelete = await this.testimonialRepository.delete(id);

    if (testimonialToDelete.affected === 0) {
      throw new NotFoundException('Testimonials not found');
    }
  }

  async getRandomTestimonials(): Promise<Testimonial[] | void> {
    return await this.testimonialRepository.find({ take: 3 });
  }
}

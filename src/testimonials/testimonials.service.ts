import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Testimonial } from './testimonial.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';

@Injectable()
export class TestimonialsService {
  constructor(
    @InjectRepository(Testimonial)
    private testimonialRepository: Repository<Testimonial>,
  ) {}

  async create(
    createTestimonialDto: CreateTestimonialDto,
  ): Promise<Testimonial> {
    try {
      const testimonial = new Testimonial();
      Object.assign(testimonial, {
        ...createTestimonialDto,
        user: createTestimonialDto.userId,
      });
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

  async findOne(id: string): Promise<Testimonial> {
    const testimonialSaved = await this.testimonialRepository.findOneBy({ id });

    if (!testimonialSaved) {
      throw new NotFoundException('Testimonials not found');
    }

    return testimonialSaved;
  }

  async update(id: string, dataToUpdate: Partial<Testimonial>): Promise<void> {
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

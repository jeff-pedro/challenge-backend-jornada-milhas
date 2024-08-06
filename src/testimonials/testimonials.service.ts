import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Testimonial } from './entities/testimonial.entity';

@Injectable()
export class TestimonialsService {
  private readonly testimonials: Testimonial[] = [];
  private id: number = 0;

  async create(testimonial: Testimonial): Promise<Testimonial> {
    try {
      this.testimonials.push(testimonial);
      return testimonial;
    } catch (error) {
      throw new BadRequestException('Something bad happened');
    }
  }

  async findAll(): Promise<Testimonial[]> {
    if (this.testimonials.length === 0) {
      throw new NotFoundException('Any testimonial was found');
    }

    return this.testimonials;
  }

  async findOne(id: string): Promise<Testimonial> {
    return this.findTestimonial(id);
  }

  async update(id: string, dataToUpdate: Partial<Testimonial>) {
    const testimonialToUpdate = await this.findTestimonial(id);

    Object.entries(dataToUpdate).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      Object.assign(testimonialToUpdate, { [key]: value });
    });

    return testimonialToUpdate;
  }

  async remove(id: string): Promise<Testimonial> {
    const savedTestimonial = await this.findTestimonial(id);
    const testimonialIndex = this.testimonials.indexOf(savedTestimonial);
    this.testimonials.splice(testimonialIndex, 1);
    return savedTestimonial;
  }

  private async findTestimonial(id: string): Promise<Testimonial> {
    const testimonial = await this.testimonials.find(
      (testimonial) => testimonial.id === id,
    );

    if (!testimonial) {
      throw new NotFoundException('Testimonial not found');
    }

    return testimonial;
  }

  private getRandomInt(maxNumber: number): number {
    return Math.round(Math.random() * maxNumber);
  }

  async getRandomTestimonials(): Promise<Testimonial[]> {
    const testimonialList: Testimonial[] = [];

    if (this.testimonials.length === 0) {
      throw new NotFoundException('Testimonials not found');
    }

    for (let i = 0; i < 3; ) {
      const randomIntNumber = this.getRandomInt(this.testimonials.length - 1);

      if (testimonialList.includes(this.testimonials[randomIntNumber])) {
        continue;
      }

      testimonialList.push(this.testimonials[randomIntNumber]);
      i++;
    }

    return testimonialList;
  }
}

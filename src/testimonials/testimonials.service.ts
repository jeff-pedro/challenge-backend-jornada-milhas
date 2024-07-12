import { Injectable } from '@nestjs/common';
import { Testimonial } from './interfaces/testimonial.interface';

@Injectable()
export class TestimonialsService {
  private readonly testimonials: Testimonial[] = [];
  private id: number = 0;

  async create(testimonial: Testimonial): Promise<void> {
    this.testimonials.push(testimonial);
  }

  async findAll(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async findById(id: string): Promise<Testimonial> {
    const savedTestimonial = await this.testimonials.find(
      (testimonial: any) => testimonial.id === id,
    );

    if (!savedTestimonial) {
      throw new Error('Testimonial not found');
    }

    return savedTestimonial;
  }

  async update(id: string, dataToUpdate: Partial<Testimonial>) {
    const testimonialToUpdate = await this.findById(id);

    Object.entries(dataToUpdate).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }
      Object.assign(testimonialToUpdate, { [key]: value });
    });

    return testimonialToUpdate;
  }

  async remove(id: string): Promise<Testimonial> {
    const savedTestimonial = await this.findById(id);
    const testimonialIndex = this.testimonials.indexOf(savedTestimonial);
    this.testimonials.splice(testimonialIndex, 1);
    return savedTestimonial;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTestimonialDto } from './dto/create-testimonial.dto';

@Injectable()
export class TestimonialsService {
  private testimonials: any = [];
  private id: number = 0;

  async create(testimonial: CreateTestimonialDto) {
    const testimonialToSave = {
      id: this.generateId(),
      ...testimonial,
    };
    this.testimonials.push(testimonialToSave);
    return testimonialToSave;
  }

  async findAll() {
    return this.testimonials;
  }

  async findOne(id: number) {
    const testimonial = this.testimonials.find(
      (testimonial: any) => testimonial.id === Number(id),
    );
    return testimonial;
  }

  async update(id: number, newData: object) {
    const testimonialToUpdate = await this.testimonials.find(
      (testimonial: any) => testimonial.id === Number(id),
    );
    Object.assign(testimonialToUpdate, newData);
    return testimonialToUpdate;
  }

  async remove(id: number) {
    const testimonialIndex = await this.testimonials.findIndex(
      (testimonial: any) => testimonial.id === Number(id),
    );

    if (testimonialIndex !== -1) {
      this.testimonials.splice(testimonialIndex, 1);
    }

    return;
  }

  generateId() {
    return (this.id += 1);
  }
}

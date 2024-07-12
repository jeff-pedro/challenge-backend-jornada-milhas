import { Injectable } from '@nestjs/common';

@Injectable()
export class TestimonialsService {
  private testimonials: any = [];
  private id: number = 0;

  generateId() {
    return (this.id += 1);
  }

  async findAll() {
    return this.testimonials;
  }

  async findOne(id: number) {
    const testimonial = await this.testimonials.find(
      (testimonial: any) => testimonial.id === Number(id),
    );
    return testimonial;
  }

  async create(testimonial: object): Promise<object> {
    const testimonialToSave = { id: this.generateId(), ...testimonial };
    this.testimonials.push(testimonialToSave);
    return testimonialToSave;
  }

  async update(id: number, newData: object): Promise<object> {
    const testimonialToUpdate = await this.testimonials.find(
      (testimonial: any) => testimonial.id === Number(id),
    );
    Object.assign(testimonialToUpdate, newData);
    return testimonialToUpdate;
  }

  async delete(id: number) {
    const testimonialIndex = await this.testimonials.findIndex(
      (testimonial: any) => testimonial.id === Number(id),
    );

    if (testimonialIndex !== -1) {
      this.testimonials.splice(testimonialIndex, 1);
    }

    return;
  }
}

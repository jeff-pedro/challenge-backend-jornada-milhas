import { Module } from '@nestjs/common';
import TestimonialsModule from './testimonials/testimonials.module';

@Module({
  imports: [TestimonialsModule],
})
export class AppModule {}

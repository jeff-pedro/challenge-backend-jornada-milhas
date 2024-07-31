import { Module } from '@nestjs/common';
import { DestinationsModule } from './destinations/destinations.module';
import TestimonialsModule from './testimonials/testimonials.module';

@Module({
  imports: [TestimonialsModule, DestinationsModule],
})
export class AppModule {}

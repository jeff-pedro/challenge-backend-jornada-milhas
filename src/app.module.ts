import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DestinationsModule } from './destinations/destinations.module';
import TestimonialsModule from './testimonials/testimonials.module';

@Module({
  imports: [TestimonialsModule, DestinationsModule, ConfigModule.forRoot()],
})
export class AppModule {}

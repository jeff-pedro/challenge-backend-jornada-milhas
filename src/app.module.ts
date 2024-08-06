import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DestinationsModule } from './destinations/destinations.module';
import TestimonialsModule from './testimonials/testimonials.module';
import configuration from './config/configuration';
import { validate } from './validations/env.validation';

@Module({
  imports: [
    TestimonialsModule,
    DestinationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
  ],
})
export class AppModule {}

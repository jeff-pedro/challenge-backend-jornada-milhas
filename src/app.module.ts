import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DestinationsModule } from './destinations/destinations.module';
import TestimonialsModule from './testimonials/testimonials.module';
import configuration from './config/configuration';

@Module({
  imports: [
    TestimonialsModule,
    DestinationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
  ],
})
export class AppModule {}

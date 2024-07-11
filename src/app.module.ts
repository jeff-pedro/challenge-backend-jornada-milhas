import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import TestimonialsModule from './testimonial/testimonial.module';

@Module({
  imports: [TestimonialsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

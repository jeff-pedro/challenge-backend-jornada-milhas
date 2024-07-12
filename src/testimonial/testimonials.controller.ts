import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestimonialsService } from './testimonials.service';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  async findAll(): Promise<object[]> {
    const testimonialsList = await this.testimonialsService.findAll();
    return testimonialsList;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<object> {
    return this.testimonialsService.findOne(id);
  }

  @Post()
  async create(@Body() newData: object): Promise<object> {
    const savedTestimonial = await this.testimonialsService.create(newData);
    return {
      message: 'Testimonial was created',
      data: savedTestimonial,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() newData: object,
  ): Promise<object> {
    const updatedTestimonial = await this.testimonialsService.update(
      id,
      newData,
    );

    return {
      message: 'Testimonial updated',
      data: updatedTestimonial,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<object> {
    this.testimonialsService.delete(id);
    return { message: 'Testimonial deleted' };
  }
}

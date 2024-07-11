import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestimonialService } from './testimonial.service';

@Controller('testimonials')
export class TestimonialController {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Get()
  async findAll(): Promise<object[]> {
    const testimonialsList = await this.testimonialService.findAll();
    return testimonialsList;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<object> {
    return this.testimonialService.findOne(id);
  }

  @Post()
  async create(@Body() newData: object): Promise<object> {
    const savedTestimonial = await this.testimonialService.create(newData);
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
    const updatedTestimonial = await this.testimonialService.update(
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
    this.testimonialService.delete(id);
    return { message: 'Testimonial deleted' };
  }
}

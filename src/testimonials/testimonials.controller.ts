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
import { CreateTestimonialDto } from './dto/create-testimonial.dto';
import { UpdateTestimonialDto } from './dto/update-testimonial.dto';
import { v4 as uuid } from 'uuid';

@Controller()
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Post('/testimonials')
  async create(@Body() createTestimonialDto: CreateTestimonialDto) {
    await this.testimonialsService.create({
      id: uuid(),
      ...createTestimonialDto,
    });
    return { message: 'Testimonial was created' };
  }

  @Get('/testimonials')
  async findAll(): Promise<object> {
    const testimonialsList = await this.testimonialsService.findAll();
    return { data: testimonialsList };
  }

  @Get('/testimonials/:id')
  async findOne(@Param('id') id: string): Promise<object> {
    const testimonialSaved = await this.testimonialsService.findById(id);
    return { data: testimonialSaved };
  }

  @Put('/testimonials/:id')
  async update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    const testimonialUpdated = await this.testimonialsService.update(
      id,
      updateTestimonialDto,
    );

    return {
      message: 'Testimonial updated',
      data: testimonialUpdated,
    };
  }

  @Delete('/testimonials/:id')
  async remove(@Param('id') id: string) {
    const testimonialRemoved = await this.testimonialsService.remove(id);
    return { message: `Testimonial #${testimonialRemoved.id} was deleted` };
  }

  @Get('/testimonials-home')
  async randomTestimonials() {
    const testimonialsList =
      await this.testimonialsService.getRandomTestimonials();
    return { data: testimonialsList };
  }
}

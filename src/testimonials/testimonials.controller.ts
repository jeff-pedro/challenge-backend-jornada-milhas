import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
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
    const testimonialSaved = await this.testimonialsService.create({
      id: uuid(),
      ...createTestimonialDto,
    });
    return { data: testimonialSaved };
  }

  @Get('/testimonials')
  async findAll(): Promise<object> {
    const testimonialsList = await this.testimonialsService.findAll();
    return { data: testimonialsList };
  }

  @Get('/testimonials/:id')
  async findOne(@Param('id') id: string): Promise<object> {
    const testimonialSaved = await this.testimonialsService.findOne(id);
    return { data: testimonialSaved };
  }

  @Patch('/testimonials/:id')
  async update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    await this.testimonialsService.update(id, updateTestimonialDto);

    return {
      message: `Testimonial #${id} was updated`,
    };
  }

  @Delete('/testimonials/:id')
  async remove(@Param('id') id: string) {
    await this.testimonialsService.remove(id);
    return { message: `Testimonial #${id} was deleted` };
  }

  @Get('/testimonials-home')
  async pick() {
    const testimonials = await this.testimonialsService.findAll({
      order: { id: 'ASC' },
      take: 3,
    });
    return { data: testimonials };
  }
}

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
import { Testimonial } from './interfaces/testimonial.interface';
import { v4 as uuid } from 'uuid';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Post()
  async create(@Body() createTestimonialDto: CreateTestimonialDto) {
    await this.testimonialsService.create({
      id: uuid(),
      ...createTestimonialDto,
    });
    return { message: 'Testimonial was created' };
  }

  @Get()
  async findAll(): Promise<Testimonial[]> {
    const testimonialsList = await this.testimonialsService.findAll();
    return testimonialsList;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Testimonial> {
    const testimonialSaved = await this.testimonialsService.findById(id);
    return testimonialSaved;
  }

  @Put(':id')
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

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const testimonialRemoved = await this.testimonialsService.remove(id);
    return { message: `Testimonial #${testimonialRemoved.id} was deleted` };
  }
}

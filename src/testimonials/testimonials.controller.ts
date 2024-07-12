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
import { ListTestimonialDto } from './dto/list-testimonial.dto';

@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Get()
  async findAll() {
    const testimonialsList = await this.testimonialsService.findAll();
    return new ListTestimonialDto(
      testimonialsList.id,
      testimonialsList.name,
      testimonialsList.photo,
      testimonialsList.testimonial,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const savedTestimonial = await this.testimonialsService.findOne(Number(id));
    return new ListTestimonialDto(
      savedTestimonial.id,
      savedTestimonial.name,
      savedTestimonial.photo,
      savedTestimonial.testimonial,
    );
  }

  @Post()
  async create(@Body() createTestimonialDto: CreateTestimonialDto) {
    const savedTestimonial =
      await this.testimonialsService.create(createTestimonialDto);

    return {
      message: 'Testimonial was created',
      data: savedTestimonial,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTestimonialDto: UpdateTestimonialDto,
  ) {
    const updatedTestimonial = await this.testimonialsService.update(
      Number(id),
      updateTestimonialDto,
    );

    return {
      message: 'Testimonial updated',
      data: updatedTestimonial,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.testimonialsService.remove(Number(id));
    return { message: `Testimonial deleted with #${id}` };
  }
}

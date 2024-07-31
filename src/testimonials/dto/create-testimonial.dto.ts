import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTestimonialDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsString()
  testimonial: string;
}

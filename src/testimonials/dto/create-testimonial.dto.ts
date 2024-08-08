import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateTestimonialDto {
  @IsUUID()
  userId: string;

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

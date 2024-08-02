import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsString()
  photo_1: string;

  @IsNotEmpty()
  @IsString()
  photo_2: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(160)
  target: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descriptive_text?: string;
}

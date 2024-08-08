import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsString()
  photo1: string;

  @IsNotEmpty()
  @IsString()
  photo2: string;

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
  descriptiveText?: string;
}

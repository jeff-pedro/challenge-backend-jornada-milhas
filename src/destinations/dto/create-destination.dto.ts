import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateDestinationDto {
  @IsNotEmpty()
  @IsString()
  photo: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}

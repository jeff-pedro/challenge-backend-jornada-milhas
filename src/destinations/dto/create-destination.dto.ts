import { Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { PhotoDestinationDTO } from './photo-destination.dto';

export class CreateDestinationDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(2)
  @ValidateNested()
  @Type(() => PhotoDestinationDTO)
  photos: PhotoDestinationDTO[];

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

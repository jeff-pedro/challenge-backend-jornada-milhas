import { IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

export class PhotoDestinationDTO {
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @IsOptional()
  description: string;
}

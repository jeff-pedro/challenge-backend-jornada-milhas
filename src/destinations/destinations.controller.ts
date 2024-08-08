import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { DestinationsService } from './destinations.service';
import { CreateDestinationDto } from './dto/create-destination.dto';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { ListDestinationDto } from './dto/list-destination.dto';
import { Destination } from './destination.entity';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Post()
  async create(@Body() createDestinationDto: CreateDestinationDto) {
    const destination = new Destination();
    Object.assign(destination, { ...createDestinationDto, id: uuid() });

    const destinationSaved = await this.destinationsService.create(destination);

    return { data: destinationSaved };
  }

  @Get()
  async findAll(@Query('name') name: string) {
    const destinationList = await this.destinationsService.findAll(name);
    return { data: destinationList };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const destination = await this.destinationsService.findOne(id);

    return {
      data: new ListDestinationDto(
        destination.photo1,
        destination.photo2,
        destination.name,
        destination.target,
        destination.descriptiveText,
      ),
    };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
  ) {
    await this.destinationsService.update(id, updateDestinationDto);
    return { message: `Destination #${id} was updated` };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.destinationsService.remove(id);
    return { message: `Destination #${id} was deleted` };
  }
}

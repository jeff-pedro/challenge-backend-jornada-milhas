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

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @Post()
  async create(@Body() createDestinationDto: CreateDestinationDto) {
    const destinationSaved = await this.destinationsService.create({
      id: uuid(),
      ...createDestinationDto,
    });
    return { data: destinationSaved };
  }

  @Get()
  async findAll(@Query('name') name: string) {
    try {
      const destinationList = await this.destinationsService.findAll(name);
      return { data: destinationList };
    } catch (error) {
      return { message: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const destinationObject = await this.destinationsService.findOne(id);
    return { data: destinationObject };
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDestinationDto: UpdateDestinationDto,
  ) {
    const destinationUpdated = await this.destinationsService.update(
      id,
      updateDestinationDto,
    );
    return { message: 'Destination updated', data: destinationUpdated };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const destinationRemoved = await this.destinationsService.remove(id);
    return { message: `Destination #${destinationRemoved.id} was deleted` };
  }
}

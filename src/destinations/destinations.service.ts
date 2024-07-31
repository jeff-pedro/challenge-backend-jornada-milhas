import { Injectable } from '@nestjs/common';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Destination } from './entities/destination.entity';

@Injectable()
export class DestinationsService {
  private destinations: Destination[] = [];

  async create(createDestinationDto: Destination) {
    this.destinations.push(createDestinationDto);
    return this.destinations[this.destinations.length - 1];
  }

  async findAll() {
    return this.destinations;
  }

  private async findDestination(id: string): Promise<Destination> {
    const destination = this.destinations.find(
      (destination) => destination.id === id,
    );

    if (!destination) {
      throw new Error('Destination not found');
    }

    return destination;
  }

  async findOne(id: string) {
    return this.findDestination(id);
  }

  async update(id: string, updateDestinationDto: UpdateDestinationDto) {
    const destinationUpdated = await this.findDestination(id);

    Object.assign(destinationUpdated, updateDestinationDto);

    return destinationUpdated;
  }

  async remove(id: string) {
    const destinationSaved = await this.findDestination(id);

    this.destinations = this.destinations.filter(
      (destination) => destination.id !== id,
    );

    return destinationSaved;
  }
}

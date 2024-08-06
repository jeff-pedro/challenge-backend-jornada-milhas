import { Injectable } from '@nestjs/common';
import { UpdateDestinationDto } from './dto/update-destination.dto';
import { Destination } from './entities/destination.entity';
import { ConfigService } from '@nestjs/config';
import { CohereClient } from 'cohere-ai';

@Injectable()
export class DestinationsService {
  private destinations: Destination[] = [];

  constructor(
    private configService: ConfigService<
      {
        accessKeys: { cohereApiKey: string };
      },
      true
    >,
  ) {}

  async create(createDestinationDto: Destination) {
    if (!createDestinationDto.descriptive_text) {
      const textDescription = `Faça um resumo sobre ${createDestinationDto.name} enfatizando o 
      porque este lugar é incrível. Utilize uma linguagem 
      informal e até 100 caracteres no máximo em cada parágrafo. 
      Crie 2 parágrafos neste resumo. O texto deve ser escrito em português do Brasil.`;

      createDestinationDto.descriptive_text =
        await this.generateText(textDescription);
    }

    this.destinations.push(createDestinationDto);
    return this.destinations[this.destinations.length - 1];
  }

  private async generateText(prompt: string): Promise<string> {
    const token = this.configService.get('accessKeys.cohereApiKey', {
      infer: true,
    });

    const cohere = new CohereClient({ token });

    const chat = await cohere.chat({
      model: 'command',
      message: prompt,
    });

    return chat.text;
  }

  async findAll(name?: string): Promise<Destination[]> {
    if (name) {
      const destinationSaved = this.destinations.filter(
        (destination) => destination.name == name,
      );

      if (!destinationSaved[0]) throw new Error('Any destination was found');

      return destinationSaved;
    }

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

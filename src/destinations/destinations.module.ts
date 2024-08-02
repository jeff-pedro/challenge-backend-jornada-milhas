import { Module } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { DestinationsController } from './destinations.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [DestinationsController],
  providers: [DestinationsService],
  imports: [ConfigModule.forRoot()],
})
export class DestinationsModule {}

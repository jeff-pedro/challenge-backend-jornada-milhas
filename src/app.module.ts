import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DestinationsModule } from './destinations/destinations.module';
import { TestimonialsModule } from './testimonials/testimonials.module';
import configuration from './config/configuration';
import { validate } from './validations/env.validation';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Testimonial } from './testimonials/testimonial.entity';
import { Destination } from './destinations/destination.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';

@Module({
  imports: [
    TestimonialsModule,
    DestinationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'jornadamilhas',
      entities: [User, Testimonial, Destination],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

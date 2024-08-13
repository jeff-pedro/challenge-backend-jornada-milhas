import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Destination } from '../../destinations/entities/destination.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ nullable: true })
  description: string;

  @ManyToOne(() => Destination, (destination) => destination.photos)
  @JoinColumn({
    name: 'destination_id',
    referencedColumnName: 'id',
  })
  destination: Destination;
}

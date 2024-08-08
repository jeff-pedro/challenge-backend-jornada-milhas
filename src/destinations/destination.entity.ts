import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Destination {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'photo1', nullable: false })
  photo1: string;

  @Column({ name: 'photo2', nullable: true })
  photo2: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'target', length: 160, nullable: false })
  target: string;

  @Column({ name: 'descriptive_text', nullable: false })
  descriptiveText: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: string;
}

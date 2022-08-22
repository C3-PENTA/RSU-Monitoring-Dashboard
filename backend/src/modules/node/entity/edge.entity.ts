import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Rsu } from './rsu.entity';

@Entity()
export class Edge {
  @ApiProperty()
  @PrimaryGeneratedColumn('increment')
  id: number;

  
}

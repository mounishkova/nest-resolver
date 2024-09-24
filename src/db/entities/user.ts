import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({type: 'varchar', length: 255})
  name: string;

  @Column({type: 'varchar', length: 255})
  email: string;

  @Column({type: 'varchar', length: 255})
  password: string;

  @Column({type: 'varchar', length: 255})
  gender: string;

  @Column({type: 'varchar', length: 255})
  role: string;

}
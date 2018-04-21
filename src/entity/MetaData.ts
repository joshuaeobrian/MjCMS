import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MetaData {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    content:string;
}
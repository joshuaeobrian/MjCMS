import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Section {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    heading:string;

    @Column({type:"longtext"})
    content:string;

    @Column({type:"timestamp", default: ()=> "CURRENT_TIMESTAMP"})
    dateCreated:Date;

    @Column({type:"timestamp"})
    dateModified: Date;





}
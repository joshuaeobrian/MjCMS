import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


@Entity()
export class Role{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    roleName: string;

    @Column()
    description:string;
}
import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Role} from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age:number;

    // @Column({unique:true})
    // username:string;
    //
    // @Column()
    // password:string;
    //
    // @Column()
    // email:string;
    //
    // @OneToOne(type => Role)
    // @JoinColumn()
    // role:Role;
}

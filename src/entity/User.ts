import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import {Role} from "./Role";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique:true})
    username:string;

    @Column()
    password:string;

    @Column()
    email:string;

    
    @Column({default:true})
    visible:boolean;

    @ManyToOne(type => Role)
    @JoinColumn()
    role:Role;

}

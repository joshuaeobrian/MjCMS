import {Section} from "./Section";
import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {MetaData} from "./MetaData";

@Entity()
export class Page {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique:true})
    path:string;

    @Column()
    title: string;

    @OneToOne(type => Section)
    @JoinColumn()
    content: Section;

    @ManyToMany(type => MetaData)
    @JoinTable({name:"page_meta_data"})
    metaData: MetaData[];
}







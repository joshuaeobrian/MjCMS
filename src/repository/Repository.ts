import {getRepository} from "typeorm";
import {databaseConnection} from "../index";
import {Role} from "../entity/Role";


export default abstract class Repository <T>{
    public repository;

    protected constructor(model){
        this.repository = getRepository<T>(model,databaseConnection);
    }
    async all(){
        return this.repository.find();
    }

    async findById(id:number){
        return this.repository.findOne(id);
    }

    async save(model:T){
        return this.repository.save(model);
    }

    async remove(model:T){
        await this.repository.remove(model);
    }
}
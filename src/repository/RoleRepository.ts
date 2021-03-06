import {getRepository} from "typeorm";
import {Role} from "../entity/Role";
import {databaseConnection} from '../index';

export default class RoleRepository{

    private repository = getRepository(Role,databaseConnection);

    async all(){
        return this.repository.find();
    }

    async findById(id:number){
        return this.repository.findOne(id);
    }

    async save(role:Role){
        return this.repository.save(role);
    }

    async remove(role:Role){
        await this.repository.remove(role);
    }
}

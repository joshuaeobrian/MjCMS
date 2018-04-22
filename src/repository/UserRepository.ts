import {User} from "../entity/User";
import {getRepository} from "typeorm";
import {databaseConnection} from '../index';
import Repository from "./Repository";

export class UserRepository extends Repository<User>{

    constructor(){
        super(User);
    }

    /**
     *
     * @returns {Promise<User[]>}
     */
    async all(){
        return this.repository.find({relations:['role']});
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<User | undefined>}
     */
    async findById(id:number){
        return this.repository.findOne(id,{
            relations:['role']
        });
    }
    /**
     *
     * @param {number} id
     * @returns {Promise<void>}
     */
    async disableUser(id:number){
        await this.repository
            .createQueryBuilder()
            .update(User)
            .set({visible:false})
            .where("id = :id",{id:id})
            .execute();
    }
}
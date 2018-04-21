import {User} from "../entity/User";
import {getRepository} from "typeorm";
import {databaseConnection} from '../index';

export class UserRepository {

    private repository = getRepository(User,databaseConnection);

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



    /***
     *
     * @param {User} user
     * @returns {Promise<User>}
     */
    async save(user:User){
        return this.repository.save(user);
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
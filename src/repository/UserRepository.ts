import {User} from "../entity/User";
import {getRepository} from "typeorm";

export class UserRepository {
    private userRepository = getRepository(User);

    /**
     *
     * @returns {Promise<User[]>}
     */
    async all(){
        return this.userRepository.find();
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<User | undefined>}
     */
    async findById(id:number){
        return this.userRepository.findOne(id);
    }

    /***
     *
     * @param {User} user
     * @returns {Promise<User>}
     */
    async save(user:User){
        return this.userRepository.save(user);
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<void>}
     */
    async disableUser(id:number){
        await this.userRepository
            .createQueryBuilder()
            .update(User)
            .set({visible:false})
            .where("id = :id",{id:id})
            .execute();
    }
}
import Repository from "./Repository";
import {Page} from "../entity/Page";


export default class PageRepository extends Repository<Page>{

    constructor(){
        super(Page);
    }

    async all(){
        //TODO: add meta data
        return this.repository.find({relations:['section']})
    }

    /**
     *
     * @param {number} id
     * @returns {Promise<User | undefined>}
     */
    async findById(id:number){
        //TODO: add meta data
        return this.repository.findOne(id,{
            relations:['section']
        });
    }
}
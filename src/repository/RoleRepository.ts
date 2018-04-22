import {getRepository} from "typeorm";
import {Role} from "../entity/Role";
import {databaseConnection} from '../index';
import Repository from "./Repository";

export default class RoleRepository extends Repository<Role>{

    constructor(){
        super(Role);
    }
}

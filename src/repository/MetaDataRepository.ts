import {getRepository} from "typeorm";
import {MetaData} from "../entity/MetaData";
import {databaseConnection} from '../index';

export default class MetaDataRepository{

  private repository = getRepository(MetaData, databaseConnection);

  async all(){
    return this.repository.find();
  }

  async findById(id:number){
    return this.repository.findOne(id);
  }

  async save(metadata:MetaData){
    return this.repository.save(metadata);
  }

  async remove(metadata:MetaData){
    await this.repository.remove(metadata);
  }
}

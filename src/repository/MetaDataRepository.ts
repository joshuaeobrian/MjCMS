import {MetaData} from "../entity/MetaData";
import Repository from "./Repository";

export default class MetaDataRepository extends Repository<MetaData>{
  constructor(){
    super(MetaData)
  }
}

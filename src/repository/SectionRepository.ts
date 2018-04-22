
import {Section} from "../entity/Section";
import Repository from "./Repository";


export default class SectionRepository extends Repository<Section> {
  constructor(){
    super(Section);
  }
}
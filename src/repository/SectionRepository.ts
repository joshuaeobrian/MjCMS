import {getRepository} from "typeorm";
import {Section} from "../entity/Section";
import {databaseConnection} from '../index';

export default class SectionRepository {
  private repository = getRepository(Section, databaseConnection);

  async all() {
    return this.repository.find();
  }

  async findById(id: number) {
    return this.repository.findOne(id);
  }

  async save(section: Section) {
    return this.repository.save(section);
  }

  async remove(section: Section) {
    await this.repository.remove(section);
  }
}
import {NextFunction, Request, Response} from "express";
import SectionRepository from "../repository/SectionRepository";

export class SectionController {
  private respository: SectionRepository = new SectionRepository();

  async all(request: Request, response: Response, next: NextFunction) {
    return this.respository.all();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.respository.findById(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) { 
    return this.respository.save(request.body);
  }

  async deleteSection(request: Request, response: Response, next: NextFunction) {
    await this.respository.remove(request.params.id);
  }
}
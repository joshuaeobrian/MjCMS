import {NextFunction, Request, Response} from "express";
import MetaDataRepository from "../repository/MetaDataRepository";

export class MetaDataController {
  private repository:MetaDataRepository = new MetaDataRepository();

  async all(request: Request, response: Response, next: NextFunction) {
    return this.repository.all();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.repository.findById(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.repository.save(request.body);
  }

  async deleteMetaData(request: Request, response: Response, next: NextFunction) {
    await this.repository.remove(request.params.id);
  }
}
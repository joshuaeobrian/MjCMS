import {NextFunction, Request, Response} from "express";
import RoleRepository from "../repository/RoleRepository";


export class RoleController {
   private repository:RoleRepository = new RoleRepository();

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.all();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repository.findById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body);
    }

    async disableUser(request: Request, response: Response, next: NextFunction) {
        await this.repository.remove(request.params.id);
    }
}
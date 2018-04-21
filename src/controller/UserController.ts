import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import {UserRepository} from "../repository/UserRepository";

export class UserController {

    private repository:UserRepository;

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.all();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repository.findById(request.params.id);
    }

    //TODO: Find many?

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body);
    }

    async disableUser(request: Request, response: Response, next: NextFunction) {
        await this.repository.disableUser(request.params.id);
    }

}
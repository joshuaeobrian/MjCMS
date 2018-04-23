import {NextFunction, Request, Response} from "express";
import {UserRepository} from "../repository/UserRepository";

export class UserController {
    //TODO:
    private repository: UserRepository = new UserRepository();

    async all(request: Request, response: Response, next: NextFunction) {
        const session = request.session;
        let body = `Invalid Session`;
        if (session.isValidUser) {
            body = await this.repository.all();
        }
        response.send(body);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const session = request.session;
        let body = `Invalid Session`;
        if (session.isValidUser) {
            body = await this.repository.findById(request.params.id);
        }
        response.send(body);
    }


    async save(request: Request, response: Response, next: NextFunction) {
        const session = request.session;
        let body = `Invalid Session`;
        if (session.isValidUser) {
            body = await this.repository.save(request.body);
        }
        response.send(body);
    }

    async disableUser(request: Request, response: Response, next: NextFunction) {
        const session = request.session;
        let body = `Invalid Session`;
        if (session.isValidUser) {
            await this.repository.disableUser(request.params.id);
            body = `Completed`
        }
        response.send(body);

    }

}
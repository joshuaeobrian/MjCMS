import {NextFunction, Request, Response} from "express";
import PageRepository from "../repository/PageRepository";

export class PageController {

    private repository:PageRepository = new PageRepository();

    async all(request: Request, response: Response, next: NextFunction) {
        return this.repository.all();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.repository.findById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.repository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.repository.remove(request.body);
    }

}
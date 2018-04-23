import {NextFunction, Request, Response} from "express";
import {UserRepository} from "../repository/UserRepository";

export default class SessionController{
    private repository: UserRepository = new UserRepository();

    async createInitalSession(request:Request, response:Response, next:NextFunction) {
        const session = request.session;
        let { username, email , password } = request.body;
        let isValidUser = false;
        let body = `Invalid`;
        //TODO: verify user
        if(isValidUser){
            /*TODO: if valid user then run session service and build out a data dictionary to send to the front end*/
            //TODO: What values do we want to store in the express-session (username, firstName, userID)?
            session.username = '';
            session.id = '';
            session.isValidUser = true
        }
        response.send(body);
    }

    async updateSession(request:Request, response:Response, next:NextFunction){

    }

    async closeSession(request:Request, response:Response, next:NextFunction){
        const session = request.session;
        delete session.username;
        delete session.id;
        delete session.isValidUser;
    }
}
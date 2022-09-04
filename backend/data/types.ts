import { Request, Response, NextFunction, RequestHandler } from 'express'
export interface IUser {
    email?: string
    password: string
    username: string
}

export class User implements IUser {
    email?: string;
    username: string;
    password: string

    constructor(username: string, password: string, email?: string) {
        this.email = email;
        this.username = username;
        this.password = password;
    }

}

type Method = 'get' | 'head' | 'post' | 'put' | 'delete' | 'connect' | 'patch'

export type Route = {
    method: Method;
    path: string;
    middleware: RequestHandler[],
    controller: Controller;
}

type Controller = (req: Request, res: Response) => any
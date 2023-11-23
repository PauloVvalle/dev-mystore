import { Request, Response, NextFunction } from "express";
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';

// dotenv.config();
// const jwsecret = process.env.JWT_SECRET;
require('dotenv').config();
const jwt = require('jsonwebtoken');

export const invalidTokens: string[] = [];

export const authenticateToken = (req: Request, res: Response, next: NextFunction, ): void => {
    const token = req.header('authorization');

    if(!token) {
        res.status(401).json({error: 'Não autorizado, Token não enviado!'})
        return
    }

    if(invalidTokens.includes(token)){
        res.status(403).json({error: 'Não autorizado: Token invalidado por logout!'})
        return;
    }
    jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
        if(err){
            res.status(403).json({error: 'Não autorizado: Token invalido'})
            return;
        }
        req.body.user_id = user.user_id;
        next();
    })
}
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../data/userModel'
import { invalidTokens } from '../middlewares/authMiddleware';
require('dotenv').config();
const jwt = require('jsonwebtoken');
const saltRouds = 10;



export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.user_password, saltRouds);
        console.log('senha criptografada: ', hashedPassword);

        const user = await User.create({...req.body, user_password: hashedPassword});
        console.log('usario criado: ', user);

        res.status(201).json('Usuario criado: ' + user);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const authenticateUser = async (req: Request, res: Response): Promise<void> => {
    const { user_username, user_password } = req.body;

    try {
        const bduser = await User.findOne({ where: {user_username} });

        if(!bduser) {
            res.status(401).json({error: 'Usario invalido'})
            return;
        }

        const isPassValid = await bcrypt.compare(user_password, bduser.user_password);

        if(!isPassValid) {
            res.status(401).json({ error: 'Senha incorreta' });
            return;
        }

        const token = jwt.sign({user_id: bduser.user_id }, process.env.JWT_SECRET, {expiresIn: '30m'});
        
        res.status(200).json({token});

    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }

}

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const alllUsers = await User.findAll();
        res.status(200).json(alllUsers);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
}

export const logoutUser =  (req: Request, res: Response): void => {
    const token = req.header('authorization');

    if(token) {
        invalidTokens.push(token)

    }
    res.status(200).json({ message: 'logout sucessful'})

}
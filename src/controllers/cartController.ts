import { Request, Response } from "express";
import { Server } from 'socket.io';

export const createCart = async ( req: Request, res:Response ): Promise<void> => {
    try {
        const io: Server = req.app.get('socketio');
        io.emit('newCartNotification', { cartCreationStatus: true, message: ' oiiiii Novo carrinho criado!'});
        console.log('mensagem enviado do back-end ao front')
        res.status(201).json('Novo carrinho criado')
    } catch (error) {
        console.error('Error ao criar o carrinho! Detalhes: ' + error);
        res.status(500).json({ error:'Internal server error!' })
    }
}
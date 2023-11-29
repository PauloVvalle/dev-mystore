import express from "express";
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'
import ProductRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'
import cors from 'cors'
import http from 'http'
import { Server } from 'socket.io'

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Disposition'],
  };

const app = express();
const port = 3000;

const server = http.createServer(app);
const io = new Server(server, {
    transports: ['websocket']
});

app.set('socketio', io);
app.use(cors(corsOptions));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/products', ProductRoutes);
app.use('/carts', cartRoutes);



io.on('connection', (socket) => {
    console.log('Um cliente se conectou');
  
    socket.on('newCartNotification', (data) => {
      console.log('Nova notificação:', data);
      socket.emit('notification', 'Novo carrinho criado!');
    });
  
    socket.on('disconnect', () => {
      console.log('Um cliente se desconectou');
    });
  });

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
})




// import express from "express";
// import userRoutes from './routes/userRoutes'
// import authRoutes from './routes/authRoutes'
// import ProductRoutes from './routes/productRoutes'
// import cartRoutes from './routes/cartRoutes'
// import cors from 'cors'
// import http from 'http'
// import { Server } from 'socket.io'

// const corsOptions = {
//     origin: '*',
//     methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
//     credentials: true,
//     optionsSuccessStatus: 200,
//     exposedHeaders: ['Content-Disposition']
// }

// const app = express();
// const port = 3000;

// const server = http.createServer(app);
// const io = new Server(server, {
//     cors: corsOptions,
//     transports: ['websocket']
// });

// app.set('socketio', io)
// app.use(cors(corsOptions));
// app.use(express.json())
// app.use('/users', userRoutes)
// app.use('/auth', authRoutes)
// app.use('/products', ProductRoutes)
// app.use('/carts', cartRoutes)

// server.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// })

//Nesta versão aprimorada, eu substituí app.listen() por server.listen(). 
//Isso permite que o Socket.IO e o Express compartilhem o mesmo servidor HTTP. 
//Além disso, corrigi alguns erros de digitação nas opções CORS: methots foi alterado para methods,
//Credential foi alterado para credentials e optionSucessStatus foi alterado para optionsSuccessStatus
import  express  from "express";
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'
import ProductRoutes from './routes/productRoutes'
import cors from 'cors'

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:3001' } ));
app.use(express.json())
app.use('/users', userRoutes)
app.use('/auth', authRoutes)
app.use('/products', ProductRoutes)

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
})
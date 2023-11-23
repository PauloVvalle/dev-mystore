import  express  from "express";
import userRoutes from './routes/userRoutes'
import authRoutes from './routes/authRoutes'

const app = express();
const port = 3000;

app.use(express.json())
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
})
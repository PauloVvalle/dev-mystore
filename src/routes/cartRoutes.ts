import  express  from "express";
import { createCart } from "../controllers/cartController";


const router = express.Router();

router.post('/', createCart)


export default router;
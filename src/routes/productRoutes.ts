import  express  from "express";
import { getFilteredProducts } from "../controllers/productController";

const router = express.Router();

router.get('/fitered', getFilteredProducts);

export default router;
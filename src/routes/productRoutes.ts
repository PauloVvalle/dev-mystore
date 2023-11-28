import  express  from "express";
import { getFilteredProducts, createProduct } from "../controllers/productController";

const router = express.Router();

router.get('/fitered', getFilteredProducts);
router.post('/', createProduct)

export default router;
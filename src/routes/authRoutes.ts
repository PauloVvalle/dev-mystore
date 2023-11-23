import express from "express";
import { authenticateUser, logoutUser } from '../controllers/userController'

const router = express.Router();

router.post('/login', authenticateUser);
router.post('/logout', logoutUser)

export default router;
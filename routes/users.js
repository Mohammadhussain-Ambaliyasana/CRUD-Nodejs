import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { deleteUser } from '../controllers/deleteUser.js';
const router = express.Router();

// Route to create user
router.post('/create', createUser)

// Route to delete user
router.delete('/delete/:id', deleteUser)



export default router;

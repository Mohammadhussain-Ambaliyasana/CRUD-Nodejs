import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { deleteUser } from '../controllers/deleteUser.js';
import { findUser } from '../controllers/findUser.js';
const router = express.Router();

// Route to create user
router.post('/create', createUser)

// Route to delete user
router.delete('/delete/:id', deleteUser)

// Route to fetch user
router.post('/find/:id', findUser)



export default router;

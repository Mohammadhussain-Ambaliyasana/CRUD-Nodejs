import express from 'express';
import { createUser } from '../controllers/createUser.js';
import { deleteUser } from '../controllers/deleteUser.js';
import { findUser } from '../controllers/findUser.js';
import { findAllUser } from '../controllers/findAllUser.js';
const router = express.Router();

// Route to create user
router.post('/create', createUser)

// Route to delete user
router.delete('/delete/:id', deleteUser)

// Route to fetch user
router.post('/find/:id', findUser)

// Route to fetch user
router.post('/findall', findAllUser)


export default router;

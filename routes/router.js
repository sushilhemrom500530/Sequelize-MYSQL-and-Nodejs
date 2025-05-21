import express from 'express';
import { userController } from '../controller/userController.js';

const router = express.Router();

//Create a new user
router.post('/add', userController.createUser);

//Get all users
router.get('/getallusers', userController.getUsers)

//Get a user by ID
router.get('/getuser/:id', userController.getUserById)

//Update a user by ID
router.put('/update/:id', userController.updateUser)

//Delete a user by ID
router.delete('/deletuser/:id', userController.deleteUser)

export default router;

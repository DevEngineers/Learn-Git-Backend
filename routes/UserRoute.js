const express = require("express");
const bodyParser = require("body-parser");
const userController =require("../controllers/UserProfileController");

const userRouter = express.Router();

userRouter.use(bodyParser.json());

userRouter.post('/',userController.createUser);

userRouter.get('/',userController.getAllUsers);

userRouter.get('/:id',userController.getUserByID);
userRouter.post('/login',userController.loginByUserName);

userRouter.put('/:id',userController.editUser);

userRouter.delete('/:id',userController.deleteUser);

module.exports = userRouter;

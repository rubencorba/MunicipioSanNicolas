const { Router } = require("express");

const usersRouter = Router();

const {postUserHandler,getAllUsersHandler}=require ('../handlers/usersHandler');


usersRouter.get('/',getAllUsersHandler)
usersRouter.post('/',postUserHandler)

module.exports= usersRouter;
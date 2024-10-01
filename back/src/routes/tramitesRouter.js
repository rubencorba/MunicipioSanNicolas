const { Router } = require("express");

const tramitesRouter = Router();

const {postTramiteHandler,getAllTramitesHandler}=require ('../handlers/tramitesHandler'); 


tramitesRouter.get('/',getAllTramitesHandler)
tramitesRouter.post('/',postTramiteHandler)

module.exports= tramitesRouter;
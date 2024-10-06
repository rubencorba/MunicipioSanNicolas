const { Router } = require("express");

const tramitesRouter = Router();

const {postTramiteHandler,getAllTramitesHandler,putTramiteHandler}=require ('../handlers/tramitesHandler'); 


tramitesRouter.get('/',getAllTramitesHandler)
tramitesRouter.post('/',postTramiteHandler)
tramitesRouter.put('/',putTramiteHandler)

module.exports= tramitesRouter;
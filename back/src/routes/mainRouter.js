const { Router } = require("express");


const usersRouter=require('./usersRouter');
const tramitesRouter=require('./tramitesRouter');

const router = Router();

router.use('/user',usersRouter)
router.use('/tramite',tramitesRouter)


module.exports = router;

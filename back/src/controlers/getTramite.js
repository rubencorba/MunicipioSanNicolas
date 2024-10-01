/* const {Country,Activity}= require('../db.js'); */

/* const getAllCountries=async()=> await Country.findAll(
    {include:[{model:Activity,
    as:'Activities',
attributes:["nombre"],
through:{attributes:[]}}]}) */
const {User,Tramite}= require('../db.js');

const getAllTramites =async()=> await Tramite.findAll(
    {include:[{model:User,
    /* as:'Users', */
attributes:["name"],
/* through:{attributes:[]} */}]})


module.exports={getAllTramites}
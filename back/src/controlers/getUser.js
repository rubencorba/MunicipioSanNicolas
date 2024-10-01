const {User,Tramite}= require('../db.js');

const getAllUsers = async()=> await User.findAll(
    {include:[{model:Tramite,
    as:'Tramites',
attributes:["name"],
/* through:{attributes:[]} */}]})
   

module.exports={getAllUsers}
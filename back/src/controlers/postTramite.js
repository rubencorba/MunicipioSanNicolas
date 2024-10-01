const {Tramite}= require('../db.js');

const postTramite = async(name,dni,UserId) =>{
    
    const newTramite= await Tramite.create({name,dni});
    await newTramite.setUser(UserId);

    return newTramite;
    
}

module.exports={postTramite}
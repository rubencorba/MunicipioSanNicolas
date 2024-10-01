const {Tramite}= require('../db.js');

const postTramite = async(name,dni) =>{
    
    const newTramite= await Tramite.create({name,dni});
    return newTramite;
    
}

module.exports={postTramite}
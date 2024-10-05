const {Tramite}= require('../db.js');

const postTramite = async(name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado) =>{
    
    const newTramite= await Tramite.create({name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado});
    await newTramite.setUser(UserId);

    return newTramite;
    
}


module.exports={postTramite}
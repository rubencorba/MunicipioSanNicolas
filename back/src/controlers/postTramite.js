const {Tramite}= require('../db.js');

const postTramite = async(name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado,comentario) =>{
    
    const newTramite= await Tramite.create({name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado,comentario});
    await newTramite.setUser(UserId);

    return newTramite;
    
}


module.exports={postTramite}
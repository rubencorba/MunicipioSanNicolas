const {Tramite}= require('../db.js');

const putTramite = async(estado,comentario,id) =>{

    const existingTramite=await Tramite.findOne({ 
        where: { 
            id:id
        }});
    
    /* const newTramite= await Tramite.create({name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado,comentario});
    await newTramite.setUser(UserId);

    return newTramite;
     */
    if(!existingTramite)
        throw new Error(`No existe Tramite con el id ${id} en la base de datos.`);
    else{
        await existingTramite.update({
            estado: estado,           
            comentario: comentario,           
        })
        await existingTramite.reload();
    }

    return existingTramite;
}


module.exports={putTramite}
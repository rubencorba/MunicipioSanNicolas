const {postTramite}=require('../controlers/postTramite')
const {getAllTramites}=require('../controlers/getTramite')
const {putTramite}=require('../controlers/putTramite')

const postTramiteHandler= async (req,res)=>{
    const {name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado,comentario}=req.body;
    
    try {
        const response= await postTramite(name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado,comentario);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

const putTramiteHandler= async (req,res)=>{
    const {comentario,estado,id}=req.body;
    try {
        const response= await putTramite(estado,comentario,id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

const getAllTramitesHandler= async (req,res)=>{
    const response=await getAllTramites();
    res.status(200).json(response);
}

module.exports={postTramiteHandler,getAllTramitesHandler,putTramiteHandler};
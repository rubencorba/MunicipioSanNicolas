const {postTramite}=require('../controlers/postTramite')
const {getAllTramites}=require('../controlers/getTramite')

const postTramiteHandler= async (req,res)=>{
    const {name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado}=req.body;
    console.log(UserId)
    try {
        const response= await postTramite(name,dni,fechaNacimiento,domicilio,sexo,UserId,imagen,estado);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error:error.message});
    }

}

const getAllTramitesHandler= async (req,res)=>{
    const response=await getAllTramites();
    res.status(200).json(response);
}

module.exports={postTramiteHandler,getAllTramitesHandler};
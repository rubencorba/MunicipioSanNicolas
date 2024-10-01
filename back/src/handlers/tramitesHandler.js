const {postTramite}=require('../controlers/postTramite')
const {getAllTramites}=require('../controlers/getTramite')

const postTramiteHandler= async (req,res)=>{
    const {name,dni,UserId}=req.body;

    try {
        const response= await postTramite(name,dni,UserId);
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
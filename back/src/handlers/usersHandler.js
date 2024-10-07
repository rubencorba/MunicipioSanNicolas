const {postUser}=require('../controlers/postUser')
const {getAllUsers}=require('../controlers/getUser')

const postUserHandler= async (req,res)=>{
    const {name,password}=req.body;

    try {
        const response= await postUser(name,password);
        res.status(200).json(response);
    } catch (error) {
        /* res.status(400).json({error:error.message}); */
    }

}

const getAllUsersHandler= async (req,res)=>{
    
    const response=await getAllUsers();

    try {
        res.status(200).send(response)
    } catch (error) {
        console.log('no funciona')
    }
    
    
}

module.exports={postUserHandler,getAllUsersHandler};
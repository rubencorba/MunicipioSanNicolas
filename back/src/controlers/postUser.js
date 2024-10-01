const {User}= require('../db.js');

const postUser = async (name,password) =>{

    const newUser= await User.create({name,password});
    return newUser;
}

module.exports={postUser}
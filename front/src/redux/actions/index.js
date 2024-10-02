import axios from 'axios';

export const GET_ALL_USERS="GET_ALL_USERS"

export const getAllUsers=()=>{
    try {
        const endpoint='http://localhost:3001/user';
        return async (dispatch)=>{
            const {data}= await axios.get(endpoint);
            console.log(data)
            return dispatch({
                
                type:GET_ALL_USERS,
                payload:data
            })
           
        }
    } catch (error) {
        console.log(error);
    }
    
}
/* export const getAllUsers=async()=>{
    try {
        const endpoint='http://localhost:3001/user';
 
            const {data}= await axios.get(endpoint);
            
           console.log(data)
        
    } catch (error) {
        console.log(error);
    }
    
} */
import axios from 'axios';

export const GET_ALL_USERS="GET_ALL_USERS"
export const POST_TRAMITE="POST_TRAMITE"

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
    export const postTramite=(info)=>{
        /* console.log(info) */
        info.UserId= 1
        info.estado= "pendiente"
        try {
            const endpoint='http://localhost:3001/tramite';
            return async (dispatch)=>{
                const {data}= await axios.post(endpoint,info);
                
                return dispatch({
                    
                    type:POST_TRAMITE,
                    payload:data
                })
               
            }
        } catch (error) {
            console.log(error);
        }
        
    }
/* import {  } from "../actions"; */

import { APROBAR_TRAMITE, GET_ALL_TRAMITES, GET_ALL_USERS, RECHAZAR_TRAMITE, UPDATE_CURRENT_USER } from "../actions";

const initialState={
    allUsers:[],
    allTramites:[],
    currentUser: '',
    /* activities:[],
    detailCountry:{} */
};

export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ALL_USERS:
            console.log(action.payload)
            /* return {...state,allCountries:action.payload,allCountriesCopy:action.payload} */
            
        case APROBAR_TRAMITE:
            console.log(action.payload)
        case RECHAZAR_TRAMITE:
            console.log(action.payload)
            
            
        case UPDATE_CURRENT_USER:
            
            return {...state,
                currentUser:action.payload}
        
        case GET_ALL_TRAMITES:
            
            return {...state,
                allTramites:action.payload}
        

        default:
            return {...state}
    }
}
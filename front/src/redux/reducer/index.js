/* import {  } from "../actions"; */

import { GET_ALL_USERS } from "../actions";

const initialState={
    allUsers:[],
    allCountriesCopy: [],
    activities:[],
    detailCountry:{}
};

export const reducer=(state=initialState,action)=>{
    switch (action.type){
        case GET_ALL_USERS:
            console.log(action.payload)
            /* return {...state,allCountries:action.payload,allCountriesCopy:action.payload} */
            
        

        default:
            return {...state}
    }
}
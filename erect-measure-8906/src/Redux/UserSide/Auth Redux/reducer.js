import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, SET_USER } from "./actionTypes";


const initialState={
    currentUser:"",
    isLoading:false,
    isError:false,
};

export const reducer=(state=initialState,{type,payload})=>{

     switch(type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:  
        case LOGOUT_REQUEST:  
        {
            return{...state,isLoading:true }
        }
        case REGISTER_SUCCESS:{
            return{...state,currentUser:payload,isLoading:false}
        }
        case LOGIN_SUCCESS:{
            return{...state,currentUser:payload,isLoading:false}
        }
        case LOGOUT_SUCCESS:{
            return{...state,isLoading:false,currentUser:null}
        }
        case LOGIN_FAILURE:
        case LOGOUT_FAILURE: 
       case REGISTER_FAILURE:{
        return{...state,isLoading:false,isError:true}
       }

       case SET_USER:{
        return{...state,isLoading:false,currentUser:payload}
       }
         default :
           return state
     }
}
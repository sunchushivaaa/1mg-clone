import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_TOTAL_COUNT } from "./actionTypes";

const initialState={
    isLoading:false,
    products:[],
    isError:false,
    totalCount:0,
}
export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_REQUEST:{
            return{...state,isLoading:true}
        }
        case GET_PRODUCT_SUCCESS:{
            return{...state,products:payload,isLoading:false}
        }
        case GET_PRODUCT_FAILURE:{
            return{...state,isLoading:false,isError:true}
        }
        case GET_TOTAL_COUNT:{
            return{...state,totalCount:payload}
        }
        default:
            return state;
    }
}
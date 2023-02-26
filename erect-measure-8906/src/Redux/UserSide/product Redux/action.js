import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, GET_TOTAL_COUNT } from "./actionTypes"
import axios from "axios";
export const getProductRequest=()=>{
    return{type:GET_PRODUCT_REQUEST}
}

export const getProductSuccess=(payload)=>{
    return{type:GET_PRODUCT_SUCCESS,payload}
}

export const getProductFailure=()=>{
    return{type:GET_PRODUCT_FAILURE}
}

export const getTotalCount=(payload)=>{
    return{type:GET_TOTAL_COUNT,payload}
}
export const getProduct=(param)=>(dispatch)=>{
    
    dispatch(getProductRequest());
    axios.get("https://fivemg-backend.onrender.com/products",param)
    .then((res)=>{
        console.log(res);
        dispatch(getTotalCount(Number(res.headers["x-total-count"])));
        dispatch(getProductSuccess(res.data))
    })
    .catch((err)=>{
        console.log(err);
        dispatch(getProductFailure())
    })
}
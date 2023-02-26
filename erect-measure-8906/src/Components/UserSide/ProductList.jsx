import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Redux/UserSide/product Redux/action'
import ProductCard from './ProductCard';
import { useLocation, useSearchParams } from 'react-router-dom';
import "../Styles/UserSide/productlist.css"
const ProductList = ({page,limit}) => {
  const dispatch=useDispatch();
  const[searchParams]=useSearchParams();
  const location=useLocation();
  
  const {loading,error,data}=useSelector((store)=>{
      return{
        loading:store.ProductReducer.isLoading,
        data:store.ProductReducer.products,
        error:store.ProductReducer.isError,
      }
  },shallowEqual)


 let obj= {
  params: {
    category:searchParams.getAll("category"),
    rating:searchParams.getAll("rating"),
    _sort:searchParams.get("order")&& "price" ,
    _order:searchParams.get("order"),
    _page:page,
    _limit:limit
  }
}
  useEffect(()=>{
    dispatch(getProduct(obj))
  },[location.search,page])

  return (
  
    <div className='product_main'>
      
    {loading && <h1 style={{textAlign:"center"}}>...Loading</h1>}
      {error && <h1 style={{textAlign:"center"}}>...Error</h1>}
     
     {
       data && data.map((el)=>{
        return <ProductCard key={el.id}  {...el}/>
             
       })
      }
     
     </div>
   

  )
}

export default ProductList;


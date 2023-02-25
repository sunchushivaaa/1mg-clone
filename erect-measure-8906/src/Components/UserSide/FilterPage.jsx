import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import "../Styles/UserSide/Filter.css"
const FilterPage = () => {
  const[searchParams]=useSearchParams();
  const initialOrder=searchParams.get("order");
 const[order,setOrder]=useState(initialOrder || "");
 const[pageFilter,setPageFilter]=useState({
  page:1,
  limit:10,
});
const count=useSelector((store)=> store.ProductReducer.totalCount,)
const {page,limit}=pageFilter;

 const totalPages=Math.ceil(count/limit);
 console.log(totalPages)

    const handleSort=(e)=>{
      setOrder(e.target.value);
    }

    let src="https://onemg.gumlet.io/3ec13691-bb3b-49f5-a91f-b529d849ad70_1667573307.jpg?w=1062&h=124&format=auto";
  return (
    <div>
          <div className="filter_main">
             <Sidebar order={order} />
             <div style={{width:"90%",marginTop:"2rem"}}>
                <h1 className="text1">THE AYURVEDA STORE</h1>
                <img src={src} alt="pic" className="banner1"/>
                <div style={{display:"flex",width:"90%",margin:"auto",justifyContent:"space-between",marginTop:"2rem"}}>
                    <p>All Products</p>
                    <div>
                       <span>Sort By:</span>
                       <select onChange={handleSort} value={order}>
                        <option>All</option>
                        <option value="asc">Price:Low To High</option>
                        <option value="desc">Price:High To Low</option>
                       </select>
                    </div>
                </div>
                 <ProductList page={page} limit={limit}/>
                 <Pagination page={page} total={totalPages} setPageFilter={setPageFilter}/>
             </div>
            
         </div>
    </div>
  )
}

export default FilterPage;
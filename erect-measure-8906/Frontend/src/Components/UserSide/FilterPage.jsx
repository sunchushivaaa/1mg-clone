import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Sidebar from './Sidebar';
import "../Styles/UserSide/Filter.scss"
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

    const handleSort=(e)=>{
      setOrder(e.target.value);
    }

    let src="https://onemg.gumlet.io/1539ef32-f4b4-46f2-937f-eca8095ceae4_1667379335.png?w=1062&h=124&format=auto";
  return (
    <div id="filter_scss" className='filter_scss'>
          <div className="filter_main">
             <Sidebar order={order} />
             <div style={{marginTop:"2rem"}}>
              
                <img src={src} alt="pic" className="banner1"/>
                <div style={{display:"flex",margin:"auto",justifyContent:"space-evenly",marginTop:"2rem"}}>
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
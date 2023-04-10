import React from 'react';
import "../Styles/UserSide/pagination.css";
const Pagination = ({page,total,setPageFilter}) => {
  
  const pages=new Array(total).fill(0).map((el,i)=> 
         <button  disabled={page===(i+1)} key={i} className={page===(i+1)?"activeStyle":"defaultStyle"}>{i+1}</button>
    )

  return (
    <div className='pag_div'>
        <button className='pag_btn1' disabled={page===1} onClick={()=> setPageFilter((prev)=> {
            return{...prev,page:page-1}
        })}>prev</button>
            {pages}
        <button className='pag_btn2' onClick={()=> setPageFilter((prev)=> {
            return {...prev,page:page+1}
        })} disabled={page===total}>next</button>
     </div>
  )
}

export default Pagination;

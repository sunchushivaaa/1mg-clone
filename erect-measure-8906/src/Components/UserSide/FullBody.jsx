import React from 'react'
import "../Styles/FullBody.css"
import FontAwesomeIcon from "react-fontawesome"



function FullBody({name,desc,rating,price,O_price,img,discount}) {
  return (
    <div className='fullbody_main'>
<div className='fullbody_main'>
<div >
   
    <h4>{name}</h4>
    
    <span><p>Safe</p></span>
    <p>{desc}</p>
</div>
<div className='fullbody_logo_line'>
    <img className='fullbody_brand ' src={img} alt="" />
    <span className='ratings'>{rating} <FontAwesomeIcon  icon="fa-solid fa-star" /></span>
    
    <p>ISO</p>
</div>
<div className='fullbody_price_line'>
    <p>₹ {price}</p>
    <p style={{textDecoration:'line-through'}}>₹ {O_price}</p>
    <p>{discount}</p>
</div>
</div>


    </div>
  )
}

export default FullBody
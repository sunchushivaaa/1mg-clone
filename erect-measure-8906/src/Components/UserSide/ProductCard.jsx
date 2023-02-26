import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
const ProductCard = ({image,title,discount,rating,price,category}) => {
    
  return (
    <Wrapper>
        <img src={image} alt="pic" style={{display:"block",margin:"auto",marginTop:"20px"}}/>
        <p style={{fontSize:"15px", margin:"15px 20px"}}>{title}</p>
        <p style={{ margin:"8px 20px"}}>{category}</p>
        <Button>{rating}<span><AiOutlineStar/></span></Button>
        <p style={{ margin:"8px 20px",fontSize:"10px", color:"teal",fontWeight:"bold"}}>{discount}{"%off"}</p>
        <div style={{display:"flex",justifyContent:"space-between"}}>
           <p style={{ margin:"8px 20px",fontSize:"20px",fontWeight:"bold"}}>₹{price}</p>
           <p style={{marginRight:"20px",fontWeight:"bold",color:"red"}}>ADD</p>
        </div>
        
    </Wrapper>
  )
}

export default ProductCard;

const Wrapper=styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor:pointer;
  border-radius:15px;
`


const Button=styled.button`
   margin:5px 20px;
   background-color:red;
   padding:3px 8px;
   font-size:20px;
   border:none;
   border-radius:5px;
   color:white;
   font-weight:bold;

`
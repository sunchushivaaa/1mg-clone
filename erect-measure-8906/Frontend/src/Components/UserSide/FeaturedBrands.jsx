import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/UserSide/FeaturedBrands.scss";

function FeaturedBrands({ img, name }) {
  const navigate=useNavigate()
  const moveto=()=>{
    navigate("/medicines")
     }
  return (
    <div onClick={moveto} id="FeaturedBrands_main" className="FeaturedBrands_main">
      
        <img  src={img} alt="" />
        <h4>{name}</h4>
      
    </div>
    
  );
}

export default FeaturedBrands;

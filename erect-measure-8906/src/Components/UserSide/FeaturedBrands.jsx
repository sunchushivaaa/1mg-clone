import React from "react";
import "../Styles/FeaturedBrands.css";

function FeaturedBrands({ img, name }) {
  return (
    <div className="FeaturedBrands_main">
      
        <img  src={img} alt="" />
        <h4>{name}</h4>
      
    </div>
  );
}

export default FeaturedBrands;

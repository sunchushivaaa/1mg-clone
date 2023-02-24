import React from "react";
import "../Styles/UserSide/FeaturedBrands.scss";

function FeaturedBrands({ img, name }) {
  return (
    <div id="FeaturedBrands_main" className="FeaturedBrands_main">
      
        <img  src={img} alt="" />
        <h4>{name}</h4>
      
    </div>
  );
}

export default FeaturedBrands;

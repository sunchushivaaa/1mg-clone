import React from "react";
import { Link } from "react-router-dom";
import "../Styles/UserSide/FeaturedBrands.scss";

function FeaturedBrands({ img, name }) {
  return (
    <Link to="/medicines">
    <div id="FeaturedBrands_main" className="FeaturedBrands_main">
      
        <img  src={img} alt="" />
        <h4>{name}</h4>
      
    </div>
    </Link> 
  );
}

export default FeaturedBrands;

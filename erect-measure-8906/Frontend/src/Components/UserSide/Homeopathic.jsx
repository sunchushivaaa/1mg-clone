import React from "react";
import "../Styles/UserSide/Homeo.scss";
import { useNavigate } from "react-router-dom";

function Homeopathic({ name, desc, img, detail, price, O_price, discount }) {
  const navigate=useNavigate()
  const current=new Date()
 const date=`${current.getDate()}-${current.getFullYear()}`

 const moveto=()=>{
navigate("/medicines")
 }
  return (
    
    <div onClick={moveto} className="homeo">
      <div className="homeopicbox">
        <img className="homeopic" src={img} alt="" />
      </div>
      <div className="mono">
        <h3>{name}</h3>
      </div>
      <p
        style={{
          fontSize: "12px",
          color: "grey",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {desc}
      </p>

      <div className="fullbody_brand">
        <p>{detail} {date}</p>
      </div>
      <div className="abcd">
        <div className="mrp">
          <p className="delete">MRP </p> <del className="delete">₹{O_price}</del>
          <p className="discount">{discount}</p>
        </div>
          <div className="origin">
            <p className="rupee">₹{price}</p>
          </div>
      </div>
    </div>
  );
}

export default Homeopathic;

import React from "react";
import { toast } from "react-hot-toast";
import { AiOutlineStar } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
const ProductCard = ({ image, title, discount, rating, price, category }) => {
  const navigate=useNavigate()
  // function to add product in the cart
 

  // details of item is stored
  const medicine_detail = (item) => {
    localStorage.setItem("medicine_details", JSON.stringify(item));
    navigate("/medicinesdetails")
  };
  return (
    <Wrapper
      onClick={() =>
        medicine_detail({ image, title, discount, rating, price, category })
      }
    >
      <img
        src={image}
        alt="pic"
        style={{ display: "block", margin: "auto", marginTop: "20px" }}
      />
      <p style={{ fontSize: "15px", margin: "15px 20px", fontWeight: "600" }}>
        {title}
      </p>
      <p style={{ margin: "8px 20px" }}>{category}</p>
      <Button>
        {rating}
        <span>
          <AiOutlineStar />
        </span>
      </Button>
      <p
        style={{
          margin: "8px 20px",
          fontSize: "14px",
          color: "teal",
          fontWeight: "bold",
        }}
      >
        {discount}
        {"%off"}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ margin: "8px 20px", fontSize: "20px", fontWeight: "bold" }}>
          ₹{price}
        </p>
        <Addbutton
         
          style={{ marginRight: "20px", fontWeight: "bold", color: "white" ,}}
        >
          View
        </Addbutton>
      </div>
    </Wrapper>
  );
};

export default ProductCard;

const Wrapper = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  border-radius: 15px;
`;

const Button = styled.button`
  margin: 5px 20px;
  background-color: green;
  padding: 3px 8px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`;

const Addbutton = styled.button`
  background-image: linear-gradient(to right, #cb3115 0%, #f94a2a 51%, #cf2404 100%);
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  cursor: pointer;
  border: none  ;
  &:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
`;

import { useState, useEffect } from "react";
import "../../Components/Styles/UserSide/Productdetail.scss";

export default function ProductDetail() {
  const [details, setDetails] = useState({});
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("medicine_details"));
    setDetails(data);
  }, []);
  return (
    <div className="ProductDetail" id="ProductDetail">
      <div className="detail_main">
        <div className="img_box">
          <img src={details.image} alt="" />
        </div>
        <div className="detailcard">
          <h2>{details.title}</h2>
          <p>₹{details.price}</p>
          <p>Discounts on this product: ₹{details.discount}</p>
          <p>Category:{details.category}</p>
          <p>Rating:⭐{details.rating}</p>
          <p>Available on Emi</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

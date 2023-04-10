import { useState, useEffect } from "react";
import "../../Components/Styles/UserSide/Productdetail.scss";
import { toast } from "react-hot-toast";
import Information from "../../Components/UserSide/Information";
import Mgmatters from "../../Components/UserSide/Mgmatters";

export default function ProductDetail() {
  const [details, setDetails] = useState({});

  const addtocart = () => {
    let cartitem = JSON.parse(localStorage.getItem("cart_data"));
    details.quantity = 1;
    if (cartitem) {
      let item_exist = cartitem.some((ele) => ele.title === details.title);
      if (!item_exist) {
        cartitem.push(details);

        localStorage.setItem("cart_data", JSON.stringify(cartitem));
        toast.success("Added successfully");
      } else {
        toast.error("Item Already exist in Cart");
      }
    } else {
      localStorage.setItem("cart_data", JSON.stringify([details]));
    }
  };
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
          <button onClick={addtocart}>Add to Cart</button>
        </div>
      </div>
      <div className="safe_effective">
        <div className="safe_effective_main">
          <div className="safe_heading">
            <h1>Safe and Effective</h1>
          </div>
          <div className="free_div">
            <div className="content_safe">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166797/Paraben_Free__1__ercPexRok.png?tr=w-600"
                alt=""
              />
              <h3>Paraben Free</h3>
            </div>
            <div className="content_safe">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166797/Sulfate_Free_UXha4IcPl.png?tr=w-600"
                alt=""
              />
              <h3>Sulfate Free</h3>
            </div>
            <div className="content_safe">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166797/Silicone_Free__1__hBOirO2r4.png?tr=w-600"
                alt=""
              />
              <h3>Silicon Free</h3>
            </div>
            <div className="content_safe">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166797/Cruelty_Free_sVTqKvNPV.png?tr=w-600"
                alt=""
              />
              <h3>Cruelty Free</h3>
            </div>
            <div className="content_safe">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166797/Allergen_Free__2__LZK9SrttI.png?tr=w-600"
                alt=""
              />
              <h3>Allergen Free</h3>
            </div>
            <div className="content_safe">
              <img
                src="https://ik.manmatters.com/media/misc/pdp_rcl/26166797/Alcohol_Free_iG1c3lEyb.png?tr=w-600"
                alt=""
              />
              <h3>Alcohol Free</h3>
            </div>
          </div>
        </div>
      </div>
      <Mgmatters/>
      <Information/>
    </div>
    
  );
}

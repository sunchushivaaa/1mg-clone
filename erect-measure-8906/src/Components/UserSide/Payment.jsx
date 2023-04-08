import React, { useState ,useEffect} from "react";
import "../Styles/UserSide/Payment.scss";
import discount from "../Images/discount.jpg";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const pidda = [
  {
    name: "UPI",
    image:
      "https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581576219/marketing/p0w0w4crcgcthkom8j23.png",
    active: "none",
  },
  {
    name: "WALLETS",
    image:
      "https://onemg.gumlet.io/marketing/ff180498-8b1b-4d29-8a21-dff2c383b6ae.jpg",
    active: "none",
  },
  {
    name: "CARDS",
    image:
      "https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg",
    active: "none",
  },
  {
    name: "PAY LATER",
    image:
      "https://onemg.gumlet.io/marketing/3391b801-e56a-4616-8734-236cc430a6d8.jpg",
    active: "none",
  },
  {
    name: "NET BANKING",
    image:
      "https://onemg.gumlet.io/marketing/4ae5f982-bd28-4af5-b363-fd2bebe80f43.jpg",
    active: "none",
  },
];
function Payment() {
  const navigate=useNavigate()
const end=()=>{
  toast.success("payment Successfull 😍!", {
    style: {
      borderRadius: "50px",
      background: "#3be710",
      color: "black",
      padding: "1rem 1.5rem",
      fontWeight: "600",
    },
  })
  
  navigate("/")

}

  const [chotaPidda, setChotapidda] = useState([
    {
      name: "UPI",
      image:
        "https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581576219/marketing/p0w0w4crcgcthkom8j23.png",
      active: "none",
    },
    {
      name: "WALLETS",
      image:
        "https://onemg.gumlet.io/marketing/ff180498-8b1b-4d29-8a21-dff2c383b6ae.jpg",
      active: "none",
    },
    {
      name: "CARDS",
      image:
        "https://onemg.gumlet.io/marketing/9b1695ca-b1a9-4893-9157-963047689acb.jpg",
      active: "none",
    },
    {
      name: "PAY LATER",
      image:
        "https://onemg.gumlet.io/marketing/3391b801-e56a-4616-8734-236cc430a6d8.jpg",
      active: "none",
    },
    {
      name: "NET BANKING",
      image:
        "https://onemg.gumlet.io/marketing/4ae5f982-bd28-4af5-b363-fd2bebe80f43.jpg",
      active: "none",
    },
  ]);


  const [currentindex, setCurrentindex] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // get the cart data from local storage
    let cart_data = JSON.parse(localStorage.getItem("cart_data"));
   
    let sum = 0;

    cart_data.forEach((ele) => {
      // calculate the total price of all items in the cart
      sum += ele.price;
    });
    // set the total price state
    setTotalPrice(sum);
  }, []);

  return (
    <form onSubmit={end} id="payment" className="payment">
      <div className="payment_main">
        <div className="card">
          {chotaPidda.map((item, index) => (
            <div
              onClick={() => {
                setCurrentindex(index);
              }}
            >
              <img src={item.image} alt="" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        {currentindex == 0 ? (
          <div className="upi">
            <p>Transfer money from your bank account using your UPI app</p>
            <div className="iconic_div">
              <span>We accept</span>
              <div className="iconic_pic">
                <img
                  src="https://onemg.gumlet.io/marketing/140bf394-083b-49ca-b41b-39d5dc65b14d.jpg"
                  alt=""
                />
                <img
                  src="https://onemg.gumlet.io/marketing/c7aa5b0a-cef3-42ff-8cd0-ebed6c37f289.jpg"
                  alt=""
                />
                <img
                  src="https://onemg.gumlet.io/marketing/6bd3a028-294a-4653-847f-617c34425055.jpg"
                  alt=""
                />
                <img
                  src="https://onemg.gumlet.io/marketing/b8b0b68a-d09a-4289-9c66-e0efda248259.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="input_div">
              <h5>Saved UPI ID</h5>
              <h5>Pay via new UPI ID</h5>
              <div className="exupi">
                <input type="text" placeholder="Ex:mobilenumber@upi" required/>
                <label>
                  The UPI ID is in the format of name/phone <br />{" "}
                  number@bankname
                </label>
              </div>
              <button>Verify & Pay</button>
            </div>
          </div>
        ) : currentindex == 1 ? (
          <div className="payment_wallet">
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/1cf762b1-31f0-4d22-b629-693617c65c2e.jpg"
                  alt=""
                />
                
                <p>Paytm Wallet</p>
              </div>
              <p className="txt">Pay with Paytm Wallet on Tata 1mg for ₹799 or more and get up to ₹400 cashback. Offer ends 28th February 2023.</p>
              <h4>LINK WALLET</h4>
            </div>
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/bc46c843-3a35-479b-9589-d788b7e0e04f.png"
                  alt=""
                />
                <p>Mobikwik | ZIP (Pay Later)</p>
              </div>
              <p className="txt">Pay with Mobikwik and get up to ₹500 cashback on allopathy medicines with assured cashback of ₹50. Minimum cart value for the offer is ₹999. Offer valid till 28th Feb'23.</p>
              <h4>LINK WALLET</h4>
            </div>
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/4935145f-41b2-419c-a085-9b3524bb1ce0.jpg"
                  alt=""
                />
                <p>Freecharge PayLater | Wallet</p>
              </div>
              <h4>LINK WALLET</h4>
            </div>
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/b3328bf5-3494-42bc-be46-f84da4e5b724.jpg"
                  alt=""
                />
                <p>PhonePe</p>
              </div>
              <h4>LINK WALLET</h4>
            </div>
            <div>
              <div>
                <img
                  src="https://onemg.gumlet.io/marketing/c3a2745b-418c-401d-b299-41e4ba354c94.png"
                  alt=""
                />
                <p>Amazon Pay</p>
              </div>
              <h4>LINK WALLET</h4>
            </div>
          </div>
        ) : currentindex == 2 ? (
          <div>
            <h1>3</h1>
          </div>
        ) : currentindex == 3 ? (
          <div className="payment_paylater">
            <div>
              <div>
                <img
                style={{height:"45px"}}
                  src="https://onemg.gumlet.io/marketing/6b275cba-1da3-4647-9927-e86db52abb5b.png"
                  alt=""
                />
                <p>Simpl</p>
              </div>
              <p  style={{fontSize:"12px",color:"green",margin:"15px 0"}}>
                Pay with Simpl and get 5% cashback up to ₹500 on your first
                transaction with no minimum cart value. Valid till 28th February
                2023.
              </p>
              <h5 style={{color:"tomato"}}>Linking Required</h5>
            </div>
          </div>
        ) : (
          <div className="netbanking">
            <div>
              <img
                src="https://onemg.gumlet.io/image/upload/m56yb9uqxdypc7hdrn4a.png"
                alt=""
              />
              <p>ICICI</p>
            </div>
            <div>
              <img
                src="https://onemg.gumlet.io/marketing/ef67d9dc-6d6d-478b-8fcf-6b42f730852d.png"
                alt=""
              />
              <p>HDFC</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/du8msdgbj/image/upload/v1529400496/marketing/p1pmddrmfgus2qiuznm1.png"
                alt=""
              />
              <p>AXIS</p>
            </div>
            <div>
              <img
                src="https://onemg.gumlet.io/marketing/0104bc4f-ac20-448c-8862-44d3d7a60658.png"
                alt=""
              />
              <p>KOTAK</p>
            </div>
            <div>
              <img
                src="https://onemg.gumlet.io/marketing/46eba1af-8537-4b6d-95f0-bf81cfcb90a1.png"
                alt=""
              />
              <p>SBI</p>
            </div>
          </div>
        )}

        <div className="finalpay">
          <div className="one">
            <div className="paywith">
              <img src={discount} alt="" />
              <p>Pay with Paytm and get up to ₹400 cashback. T&C apply.</p>
            </div>
            <div className="payoffer">
              <h4>SHOW ALL PAYMENT OFFERS </h4>
              <span>&#8250;</span>
            </div>
          </div>
          <div className="two">
            <div className="stick">
              <input type="checkbox" />
              <div>
                <h4>Get this consultation for free</h4>
                <p>Plus more benefits by adding Care Plan membership</p>
              </div>
            </div>
            <div className="care_plan">
              <button>Care Plan</button>
              <p>₹165 for 3 months</p>
              <p className="know_more">Know more</p>
            </div>
          </div>
          <div className="new_coin">
            <div className="new_input">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Coupon Code"
              />
              <button>Apply</button>
            </div>
            <div className="new_balance">
              <div>
                <img
                  src="https://onemg.gumlet.io/image/upload/v1634725062/l0fohtgqpv9k2ozhsypi.png"
                  alt=""
                />
                <p>My new coins</p>
              </div>
              <p>Balance: 17.00</p>
            </div>
            <div className="new_redeem">
              <input type="checkbox" />
              <p>Redeem 17.00 on this order</p>
            </div>
          </div>
          <div className="new_total_price">
            <p>Price Discount</p>
            <p>-₹350</p>
            <p>GST</p>
            <p>₹350</p>
            <div>
              <p>
                Total price : <span>{totalPrice}</span>
              </p>
            </div>
          </div>
          <div>
            <button  className="Enter_detail_btn">Confirm Payment</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Payment;

import React from "react";
import "../../Components/Styles/UserSide/Mycare.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Information from "./Information";

function Careplan() {
  const navigate = useNavigate();
  const Joined = () => {
    navigate("/consultdoctor");
  };
  const threemonthplan=()=>{
    const tmonth=275
   let three= localStorage.setItem("threemonth",tmonth)
   localStorage.removeItem("cart_data")
  }
  return (
    <div className="mycare" id="mycare">
      <div className="mycare_top">
        <div className="mycare_top_main">
          <div className="explore_palan_div">
           <div>
           <button className="bgmi">Care Plan</button>
            <h1>Reduce your medical expenses by HALF</h1>
            <p>Save for things that make you happy</p>
           </div>
            <div className="explore_palan_button">
            <button>Explore Plans</button>
            </div>
           
          </div>
          <div className="old_img">
            <img
              src="https://onemg.gumlet.io/image/upload/q_auto,f_auto/v1579675864/marketing/gek7gtlcjca85q0l3ees.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="data">
        <div className="heading">
          <h1>Benefits</h1>
        </div>
        <div className="benifits">
          <div className="benifits_child">
            <div className="img_div">
              <img
                src="https://onemg.gumlet.io/image/upload/v1617168913/marketing/viz4ybkh6wfq9sjbu4ze.png"
                alt=""
              />
            </div>
            <div className="description">
              <h3>Get extra 2% discounts</h3>
              <p>
                Guaranteed savings over & above promotional offers. Extra 2%
                discounts on all prescription medicine purchases.
              </p>
            </div>
          </div>
          <div className="benifits_child">
            <div className="img_div">
              <img
                src="https://onemg.gumlet.io/image/upload/v1617168743/marketing/dmkbmj7zdcumqhvloswv.png"
                alt=""
              />
            </div>
            <div className="description">
              <h3>Free Lab Test</h3>
              <p>
                Get a free CBC or HbA1C test or upgrade to any one of our
                premium tests.
              </p>
            </div>
          </div>
          <div className="benifits_child">
            <div className="img_div">
              <img
                src="https://onemg.gumlet.io/image/upload/v1634725062/l0fohtgqpv9k2ozhsypi.png"
                alt=""
              />
            </div>
            <div className="description">
              <h3>Extra 3% NeuCoins on all orders</h3>
              <p>
                Earn extra 3% NeuCoins on all your pharmacy orders, lab tests
                and doctor consultations. Use these NeuCoins freely across all
                brands on TataNeu, online or offline.
              </p>
            </div>
          </div>
          <div className="benifits_child">
            <div className="img_div">
              <img
                src="https://onemg.gumlet.io/image/upload/v1617168863/marketing/ll8w1jwk0yjkbcx1dpcw.png"
                alt=""
              />
            </div>
            <div className="description">
              <h3>Free E-Consultation</h3>
              <p>
                Get a free E-consultation from experts around 26 different
                specialities including dieticians and nutritionist
              </p>
            </div>
          </div>
          <div className="benifits_child">
            <div className="img_div">
              <img
                src="https://onemg.gumlet.io/image/upload/v1617168794/marketing/xrrbnozjyplezqml6crx.png"
                alt=""
              />
            </div>
            <div className="description">
              <h3>No Shipping Charges</h3>
              <p>
                No shipping charges on orders above Rs.149. Unlimited Free
                shipping on orders above Rs.500. Free shipping on 20 orders
                below Rs.500
              </p>
            </div>
          </div>
          <div className="benifits_child">
            <div className="img_div">
              <img
                src="https://onemg.gumlet.io/image/upload/v1617086307/marketing/jee7thstqouh0m4xflgp.png"
                alt=""
              />
            </div>
            <div className="description">
              <h3>Introducing Rapid Delivery</h3>
              <p>
                Now get all your products delivered to you quicker than before.
                Same day or next day delivery on available medicines in selected
                cities and expanding soon to all cities
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="addition_data">
        <div className="heading">
          <h1>Additional Benefits</h1>
        </div>
        <div className="addition_benefits">
          <div className="addition_child">
            <div>
              <img
                src="https://onemg.gumlet.io/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png"
                alt=""
              />
            </div>
            <div>
              <h3>Early Sale Access</h3>
              <p>
                Be among the first ones to shop during our sale days. Get
                exclusive deals across all categories.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://onemg.gumlet.io/image/upload/v1617169094/marketing/rciejxt8uupxvkdoztx1.png"
                alt=""
              />
            </div>
            <div>
              <h3>Priority Processing</h3>
              <p>
                Care Plan members enjoy priority processing of their orders. As
                our premium members, your orders are prioritise by pushing your
                prescriptions to the front of the line for validation.
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://onemg.gumlet.io/image/upload/v1617169138/marketing/q2xl4gwlyw55awctv1lk.png"
                alt=""
              />
            </div>
            <div>
              <h3>Premium Customer Support</h3>
              <p>
                Members would be entitled to our dedicated customer support
                experts. We are committed to providing you with responsive
                assistance and resolution. Your queries are our priority.
                Fastest support to our premium members.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="careplan_card">
        <div className="card_child">
          <div className="left_child">
            <div className="top">
              {" "}
              <button className="care_plan_button">Care Plan</button>
              <h1>More discounts, faster delivery and extra care</h1>
              <h3>Join now and enjoy all the benefits</h3>
            </div>
            <div className="bottom">
              <h3>Membership includes</h3>
              <li>1 Free lab test</li>
              <li>1 Free E-consultation</li>
              <li>All other benefits mentioned above</li>
            </div>
          </div>
          <div className="right_child">
            <h1>Choose a plan that’s right for you</h1>
            <div className="three_month">
              <h2>3 months plan</h2>
              <h1>₹165</h1>
              <p>₹55/month</p>
            </div>
            <div className="six_month">
              <h2>6 months plan</h2>
              <h1>₹275</h1>
              <p>₹46/month</p>
            </div>

            <button onClick={Joined}>Join now</button>
          </div>
        </div>
      </div>
      <div className="save_card">
        <div className="heading">
          <h1>How much will I save if I buy this plan?</h1>
        </div>
        <div className="save_card_main">
          <div className="save_card_top">
            <h1>₹1825</h1>
            <p>Saving in 3 Months</p>
          </div>
          <div className="save_card_bottom">
            <div>
              <h3>I buy medicines every month</h3>
              <p>Assuming that you spend ₹1000 on medicines every month</p>
            </div>
            <div>
              <h3>I get my labs tests done regularly</h3>
              <p>
                Assuming you go for a lab test worth ₹410 once in every 6 months
              </p>
            </div>
            <div>
              <h3>I visit the Doctor regularly</h3>
              <p>
                Assuming a specialist doctor consultation worth ₹500 once in
                every 3 months
              </p>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="careplan-total">
          <div className="three_month">
            <input type="radio" />
            <h2 >₹165</h2>
            <p>for 3 months </p>
          </div>
          <div className="six_month">
            <input onClick={threemonthplan} type="radio" required />
            <h2>₹275</h2>
            <p>for 6 months</p>
          </div>

          <div className="carepaybutton">
            <Link to="/payment">
              {" "}
              <button>Pay Now</button>
            </Link>
          </div>
        </div>
      </form>
      <Information/>
    </div>
  );
}

export default Careplan;

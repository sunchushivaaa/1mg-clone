import styles from "../Styles/UserSide/Navbar.module.css";
import logo from "../Images/dc.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import open from "../Images/open.png"
import close from "../Images/cancel.png"

export default function Navbar() {
  const [user, setUser] = useState(localStorage.getItem("validkey"));
  const [serchdata, setSearchdata] = useState([]);
  const [drop, setDrop] = useState("none");
  const navigate = useNavigate();
  const stylesss = {
    background: "white",
    position: "absolute",
    left: "0",
    top: "40px",
    width: "100%",
    height: "400px",
    zIndex: "20",
    overflowY: "scroll",
    boxShadow: "-1px 1px 3px rgba(0,0,0,0.3)",
    display: drop,
  };
  const style1 = {
    background: "transparent",
    position: "fixed",
    left: "0",
    top: "0px",
    width: "100%",
    height: "100vh",
    zIndex: "-1",
    overflowY: "scroll",
    boxShadow: "-1px 1px 3px rgba(0,0,0,0.3)",
    display: drop,
  };
  const handlelogout = () => {
    localStorage.removeItem("validkey");
    setUser(localStorage.getItem("validkey"));
    toast.success("user Logout successfully")
  };
  const cartpage = () => {
    if (user) {
      navigate("/cart");
    } else {
      toast.error("Please login");
    }
  };
  const searchproduct = (e) => {
    setTimeout(() => {
      axios.get(`https://fivemg-backend.onrender.com/products`).then((res) => {
        setSearchdata(res.data);
        setDrop("block");
      });
    }, 1000);
  };
  const handleDrop = () => {
    setDrop("none");
  };
  const medicine_detail = (item) => {
    localStorage.setItem("medicine_details", JSON.stringify(item));
    window.location.href = "/medicinesdetails";
  };
  const [checkbox, setCheckbox] = useState(false);
  const openPopup = () => {
    setCheckbox(true);
  };
  const closePopup = () => {
    setCheckbox(false);
  };
  const droplink=()=>{
    navigate("/medicines")
  }
  return (
    <div className={styles.Navbar}>
      <input checked={checkbox} className={styles.Check_box} type="checkbox" />
      <div className={styles.Top}>
        <button className={styles.Close} onClick={closePopup}>
          <img width="60%" src={close} alt="" />
        </button>
        <div className={styles.Logo}>
          <Link to="/">
            <img
              title="5mg, India's Largest Healthcare Platform"
              src={logo}
              alt="logo"
            />
            <h4> 5MG</h4>
          </Link>
        </div>
        
        <div className={styles.Services}>
          <h3>
            <Link to="/medicines">💊 MEDICINES</Link>
          </h3>
          <h3>
            <Link to="/careplan">🧪 CARE PLAN</Link>
          </h3>
          <h3>
            <Link to="/consultdoctor">🧑‍⚕️ CONSULT DOCTORS</Link>
          </h3>
          <h3>
            <Link to="/covid">🦠 COVID</Link>
          </h3>
        </div>
        <div className={styles.Login}>
          {user ? (
            <div style={{ display: "flex", gap: "10px" }}>
              <p
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                👨‍💼 {user}
              </p>
              <p>|</p>
              <p
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                  color: "black",
                }}
                onClick={handlelogout}
              >
                Logout
              </p>
            </div>
          ) : (
            <div
              style={{ display: "flex", gap: "10px", textDecoration: "none" }}
            >
              <p>
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="/login"
                >
                  Login
                </Link>
              </p>
              <p>|</p>
              <p>
                <Link
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  to="/register"
                >
                  Sign up
                </Link>
              </p>
            </div>
          )}
        </div>
        <div className={styles.Cart}>
          <p>
        
            <button
              style={{
                border: "none",
                padding: "10px",
                background: "none",
                cursor: "pointer",
                fontSize: "15px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
              onClick={cartpage}
            >
                🛒
              Cart
            </button>
          </p>
        </div>
        <button className={styles.Menu}>Menu</button> 
      </div>
      <div className={styles.Divide}></div>
      <div className={styles.Middle}>
        <div className={styles.Input}>
          <select>
            <option value="">Select Location</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Banglore">Banglore</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>
          <form>
            <div
              style={{
                position: "relative",
                flexGrow: "1",
                maxWidth: "500px",
                margin: "0 10px",
              }}
            >
              <input
                 className={styles.Input_method} 
                style={{
                  fontSize: "0.9rem",
                  padding: "10px 20px",
                  marginRight: "0.3%",
                  textOverflow: " ellipsis",
                  cursor: "pointer",
                  border: "none",
                  outline: "none",
                  backgroundColor: "rgb(242, 242, 242)",
                  letterSpacing: "0.8px",
                  width: "100%",
                  maxWidth: "600px",
                }}
                onChange={searchproduct}
                type="text"
                name="search"
                placeholder="Search for Medicines and Health Products"
              />

              <div style={stylesss} className="serched_product">
                <div onClick={handleDrop} style={style1}></div>
                {serchdata.map((item) => (
                  <div
               
                    onClick={() => medicine_detail(item)}
                    style={{
                      display: "flex",
                      gap: "10px",
                      margin: "10px 0",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      width: "100%",
                      boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
                      cursor: "pointer",
                    }}
                    key={item.id}
                  >
                    <div
                      style={{
                        width: "40%",
                        borderRadius: "8px",
                        boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
                        padding: "2%",
                        margin: "2%",
                      }}
                    >
                      <img
                        style={{
                          height: "100px",
                          objectFit: "contain",
                          width: "100%",
                        }}
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <p style={{ width: "60%", textAlign: "left" }}>
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <input style={{ display: "none" }} type="submit" value="Find" />
          </form>
          <button className={styles.Open} onClick={openPopup}>
          <img width="60%" src={open} alt="" />
          </button>
          <Link className={styles.Offer} style={{textDecoration:"none",color:"tomato"}} to="/offers"><h4 >QUICK BUY! Get off on medicines*</h4></Link>
        </div>
      </div>
      <div className={styles.Divide}></div>
      <div className={styles.End}>
        <div onClick={droplink} className={styles.Dropdown1}>
          <p>
            Health Resource Center <span>&#8250;</span>
          </p>
          <div className={styles.MenuDiv1}>
            <p>All Diseases</p>
            <p>All Medicines</p>
            <p>Medicines by Therapeutic Class</p>
          </div>
        </div>
        <div onClick={droplink} className={styles.Dropdown2}>
          <p>
            Vitamins and Nutrition <span>&#8250;</span>
          </p>
          <div className={styles.MenuDiv2}>
            <p className={styles.Category}>Vitamins & Supplements</p>
            <p>Multivitamins</p>
            <p>Vitamins A-Z</p>
            <p>Mineral Supplements</p>
            <p>Vitamin B12 & B Complex</p>
            <p className={styles.Category}>Nutritional Drinks</p>
            <p>Adult Daily Nutrition</p>
            <p>Kids Nutrition (2-15 Yrs)</p>
            <p>Women Nutrition</p>
            <p className={styles.Category}>Healthy Snacks & Drinks</p>
            <p>Green Tea & Herbal Tea</p>
            <p>Apple Cider Vinegar</p>
          </div>
        </div>
        <div onClick={droplink}className={styles.Dropdown3}>
          <p>
            Health Care Devices <span>&#8250;</span>
          </p>
          <div className={styles.MenuDiv3}>
            <p className={styles.Category}>Top brands in Healthcare Devices</p>
            <p>Dr. Morepen Devices</p>
            <p>Accu-chek</p>
            <p>OneTouch</p>
            <p>Contour</p>
            <p>Dr Trust</p>
            <p>Omron</p>
            <p className={styles.Category}>BP Monitors</p>
            <p className={styles.Category}>Oxygen Concentrators & Cans</p>
            <p className={styles.Category}>Thermometers</p>
            <p>IR Thermometers</p>
            <p className={styles.Category}>Weighing Scales</p>
          </div>
        </div>
        <div onClick={droplink} className={styles.Dropdown4}>
          <p>
            Personal Care <span>&#8250;</span>
          </p>
          <div className={styles.MenuDiv4}>
            <p className={styles.Category}>Sexual Wellness</p>
            <p>Condoms</p>
            <p>Lubricants & Massage Gels</p>
            <p>Personal body massagers</p>
            <p>Men Performance Enhancers</p>
            <p>Sexual Health Supplements</p>
            <p className={styles.Category}>Skin Care</p>
            <p>Body Lotions</p>
            <p>Sunscreen</p>
            <p>Sanitizers & Handwash</p>
            <p>Facewash</p>
            <p>Bath Essentials</p>
            <p>Acne Care</p>
            <p>Lip Balm</p>
          </div>
        </div>
        <div onClick={droplink} className={styles.Dropdown5}>
          <p>
            Health Conditions <span>&#8250;</span>
          </p>
          <div className={styles.MenuDiv5}>
            <p className={styles.Category}>Stomach Care</p>
            <p className={styles.Category}>Heart Care</p>
            <p className={styles.Category}>Bone, Joint & Muscle Care</p>
            <p className={styles.Category}>Pain Relief</p>
            <p>Heating Aids</p>
            <p>Omnigel products</p>
            <p className={styles.Category}>Eye Care</p>
            <p>Eye Lubricants</p>
            <p className={styles.Category}>Ear Care</p>
            <p>Hearing Aid Devices</p>
          </div>
        </div>
      </div>
    </div>
  );
}

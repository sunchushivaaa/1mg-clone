import styles from "../Styles/UserSide/Navbar.module.css";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Top}>
        <div className={styles.Logo}>
          <Link to="/">
            <img
              title="5mg, India's Largest Healthcare Platform"
              src={logo}
              alt="logo"
            />
          </Link>
        </div>
        <div className={styles.Services}>
          <h3>
            <Link to="/medicines">MEDICINES</Link>
          </h3>
          <h3>
            <Link to="/labtest">LAB TESTS</Link>
            <span>SAFE</span>
          </h3>
          <h3>
            <Link to="/consultdoctor">CONSULT DOCTORS</Link>
          </h3>
        </div>
        <div className={styles.Login}>
          <p>
            <Link to="/login">Login</Link>
          </p>
          <p>|</p>
          <p>
            <Link to="/login">Sign up</Link>
          </p>
        </div>
        <div className={styles.Cart}>
          <p>
            <Link to="/cart">Cart</Link>
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
            <input
              type="text"
              name="search"
              placeholder="Search for Medicines and Health Products"
            />
            <input type="submit" value="Find" />
          </form>
          <button className={`${styles.Menu} ${styles.Menu2}`}>Menu</button>
        </div>
      </div>
      <div className={styles.Divide}></div>
      <div className={styles.End}>
        <div className={styles.Dropdown1}>
          <p>
            Health Resource Center <span>&#8250;</span>
          </p>
          <div className={styles.MenuDiv1}>
            <p>All Diseases</p>
            <p>All Medicines</p>
            <p>Medicines by Therapeutic Class</p>
          </div>
        </div>
        <div className={styles.Dropdown2}>
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
        <div className={styles.Dropdown3}>
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
        <div className={styles.Dropdown4}>
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
        <div className={styles.Dropdown5}>
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

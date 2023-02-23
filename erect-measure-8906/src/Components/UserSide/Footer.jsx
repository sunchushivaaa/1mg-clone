import styles from "../Styles/UserSide/Footer.module.css";
export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Text}>
        <div>
          <p className={styles.Category}>Know Us</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Press Coverage</p>
          <p>Careers</p>
          <p>Business Partnership</p>
          <p>Become a Health Partner</p>
          <p>Corporate Governance</p>
        </div>
        <div>
          <p className={styles.Category}>Our Policies</p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Editorial Policy</p>
          <p>Return Policy</p>
          <p>IP Policy</p>
          <p>Grievance Redressal Policy</p>
          <p>Fake Jobs and Fraud Disclaimer</p>
        </div>
        <div>
          <p className={styles.Category}>Our Services</p>
          <p>Order Medicines</p>
          <p>Book Lab Tests</p>
          <p>Consult a Doctor</p>
          <p>Ayurveda Articles</p>
          <p>Hindi Articles</p>
          <p>Care Plan</p>
        </div>
        <div>
          <p className={styles.Category}>Connect</p>
          <p>Want daily dose of health?</p>
          <button>SIGN UP</button>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
      </div>
      <div className={styles.Divide}></div>
      <div className={styles.Benefits}>
        <div>
          <div>
            <img
              src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"
              alt="reliable_img"
            />
          </div>
          <div>
            <h3>RELIABLE</h3>
            <p>
              All products displayed on 5mg are procured from verified and
              licensed pharmacies. All labs listed on the platform are
              accredited
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"
              alt="secure_img"
            />
          </div>
          <div>
            <h3>SECURE</h3>
            <p>
              5mg uses Secure Sockets Layer (SSL) 128-bit encryption and is
              Payment Card Industry Data Security Standard (PCI DSS) compliant
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"
              alt="affordable_img"
            />
          </div>
          <div>
            <h3>AFFORDABLE</h3>
            <p>
              Find affordable medicine substitutes, save up to 50% on health
              products, up to 80% off on lab tests and free doctor
              consultations.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.Divide}></div>
      <div className={styles.Copyright}>
        <p>
          ©2023 5mg. All rights reserved. In compliance with Drugs and
          Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we don't
          process requests for Schedule X and other habit forming drugs.
        </p>
      </div>
    </div>
  );
}

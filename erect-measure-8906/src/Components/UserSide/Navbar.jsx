import styles from "../Styles/Navbar.module.css";
import logo from "../Images/logo.png";
export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Top}>
        <div className={styles.Logo}>
          <img src={logo} alt="logo" />
        </div>
        <h1>HNJN</h1>
      </div>
    </div>
  );
}

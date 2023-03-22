import { useState } from "react";
import { FaInstagram, FaFacebook, FaBars } from "react-icons/fa";
import Tendina from "../tendina";
import styles from "./index.module.scss";

const NavBar = () => {
  const [tendina, setTendina] = useState(false);

  const toggleTendina = () => {
    setTendina((prev) => !prev);
  };

  return (
    <div className={styles.NavBar}>
      <FaBars onClick={toggleTendina} className={styles.hamburger} />
      <Tendina tendina={tendina} />
      <ul className={styles.listNav}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h2 className={styles.titleApp}>Cocktail</h2>
      <div className={styles.social}>
        <FaInstagram className={styles.insta} />
        <FaFacebook className={styles.face} />
      </div>
    </div>
  );
};

export default NavBar;

import { FaInstagram, FaFacebook } from "react-icons/fa";
import styles from "./index.module.scss";

const Tendina = ({ tendina }) => {
  return (
    <div className={`${styles.Tendina} ${tendina && styles.show}`}>
      <ul className={styles.listNav}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={styles.socialHamburger}>
        <FaInstagram />
        <FaFacebook />
      </div>
    </div>
  );
};

export default Tendina;

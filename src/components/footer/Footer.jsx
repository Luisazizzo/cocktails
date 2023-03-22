import {
  FaFacebook,
  FaFacebookMessenger,
  FaInstagram,
  FaTripadvisor,
  FaTwitterSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.newsletter}>
        <h3>Iscriviti alla newsletter</h3>
        <input type="email" placeholder="Inserisci la tua email" required />
        <button>Invia</button>
      </div>
      <div className={styles.contact}>
        <p>Palermo, 1111, Italy</p>
        <p>info@lorem.com</p>
        <p>Tel: 94573829</p>
      </div>
      <div className={styles.support}>
        <p>Help</p>
        <p>About</p>
        <p>Faq</p>
      </div>
      <div className={styles.socialFooter}>
        <FaFacebook className={styles.icon} />
        <FaFacebookMessenger className={styles.icon} />
        <FaInstagram className={styles.icon} />
        <FaTripadvisor className={styles.icon} />
        <FaTwitterSquare className={styles.icon} />
        <FaWhatsappSquare className={styles.icon} />
      </div>
    </div>
  );
};

export default Footer;

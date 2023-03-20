import { FaInstagram, FaFacebook } from "react-icons/fa";
import "./index.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul className="NavBar__list-nav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <h2 className="NavBar__title-app">Cocktail</h2>
      <div className="social">
        <FaInstagram className="insta" />
        <FaFacebook className="face" />
      </div>
    </div>
  );
};

export default NavBar;

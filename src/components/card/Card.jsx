import "./index.scss";
import { arrayIngredient } from "../utils/func";

const Card = ({ drink }) => {
  return (
    <div className="Card">
      <img src={drink.strDrinkThumb} alt="#" />
      <h2 className="Card__title-drink">{drink.strDrink}</h2>
      <ul>
        {arrayIngredient(drink).map((item) => item !== null && <li>{item}</li>)}
      </ul>
    </div>
  );
};

export default Card;

import "./index.scss";
import { arrayIngredient } from "../utils/func";

const Card = ({ drink, setSingleDrink }) => {
  const openSingleDrink = () => {
    setSingleDrink((prev) => ({
      ...prev,
      payload: drink,
      visible: true,
    }));
  };

  return (
    <div onClick={openSingleDrink} className="Card">
      <img src={drink.strDrinkThumb} alt="#" />
      <h2 className="Card__title-drink">{drink.strDrink}</h2>
      <ul>
        {arrayIngredient(drink).map(
          (item, i) => item !== null && <li key={i}>{item}</li>
        )}
      </ul>
    </div>
  );
};

export default Card;

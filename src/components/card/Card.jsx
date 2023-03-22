import styles from "./index.module.scss";
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
    <div onClick={openSingleDrink} className={styles.Card}>
      <img src={drink.strDrinkThumb} alt="#" />
      <h2 className={styles.titleDrink}>{drink.strDrink}</h2>
      <ul>
        {arrayIngredient(drink).map(
          (item, i) => item !== null && <li key={i}>{item}</li>
        )}
      </ul>
    </div>
  );
};

export default Card;

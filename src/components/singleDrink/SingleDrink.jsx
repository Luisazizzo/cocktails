import { arrayIngredient } from "../utils/func";
import { BiChevronLeftCircle } from "react-icons/bi";
import styles from "./index.module.scss";

const SingleDrink = ({ data, setSingleDrink }) => {
  const closeSingleDrink = () => {
    setSingleDrink(false);
  };
  return (
    <div className={styles.SingleDrink}>
      <BiChevronLeftCircle
        onClick={closeSingleDrink}
        className={styles.close}
      />
      <div className={styles.description}>
        <h1>{data.strDrink}</h1>
        <h3>Bicchiere:</h3>
        <p> {data.strGlass}</p>
        <h3>Ingredineti:</h3>
        <ul className={styles.ingredienti}>
          {arrayIngredient(data).map(
            (item, i) => item !== null && <li key={i}>{item}</li>
          )}
        </ul>
        <h3>Preparazione:</h3>
        <p>{data.strInstructionsIT}</p>
      </div>
      <div className={styles.img}>
        <img src={data.strDrinkThumb} alt="strDrinkThumb" />
      </div>
      <div className={styles.carousel}>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default SingleDrink;

import { arrayIngredient } from "../utils/func";
import { BiChevronLeftCircle } from "react-icons/bi";
import styles from "./index.module.scss";

const SingleDrink = ({ data, setSingleDrink, setIndice, cocktailList }) => {
  const closeSingleDrink = () => {
    setSingleDrink((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const nextIndex = () => {
    setIndice((prev) => {
      if (prev === cocktailList.length - 1) return prev;
      else return prev + 1;
    });
  };
  const previousIndex = () => {
    setIndice((prev) => {
      if (prev <= 0) return prev;
      else return prev - 1;
    });
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
        <button onClick={previousIndex}>Previous</button>
        <button onClick={nextIndex}>Next</button>
      </div>
    </div>
  );
};

export default SingleDrink;

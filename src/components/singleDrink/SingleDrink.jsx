import { arrayIngredient } from "../utils/func";
import "./index.scss";

const SingleDrink = ({ data, setSingleDrink }) => {
  const closeSingleDrink = () => {
    setSingleDrink(false);
  };
  return (
    <div className="SingleDrink">
      <p onClick={closeSingleDrink} className="close">
        x
      </p>
      <div className="SingleDrink__description">
        <h1>{data.strDrink}</h1>
        <h3>Bicchiere:</h3>
        <p> {data.strGlass}</p>
        <h3>Ingredineti:</h3>
        <ul className="ingredienti">
          {arrayIngredient(data).map(
            (item, i) => item !== null && <li key={i}>{item}</li>
          )}
        </ul>
        <h3>Preparazione:</h3>
        <p>{data.strInstructionsIT}</p>
      </div>
      <div className="SingleDrink__img">
        <img src={data.strDrinkThumb} alt="strDrinkThumb" />
      </div>
      <div className="btn-carousel">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default SingleDrink;

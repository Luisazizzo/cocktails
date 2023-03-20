import "./index.scss";

const Card = ({ drink }) => {
  return (
    <div className="Card">
      <img src={drink.strDrinkThumb} alt="#" />
      <h2 className="Card__title-drink">{drink.strDrink}</h2>
      <ul>
        <li>{drink.strIngredient1}</li>
        <li>{drink.strIngredient2}</li>
        <li>{drink.strIngredient3}</li>
        <li>{drink.strIngredient4}</li>
        <li>{drink.strIngredient5}</li>
      </ul>
    </div>
  );
};

export default Card;

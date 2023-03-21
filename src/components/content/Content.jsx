import Card from "../card";
import { filteredList } from "../utils/func";
import "./index.scss";

const Content = ({ data, category, setSingleDrink }) => {
  return (
    <div className="Content">
      {filteredList(data, "strCategory", category).map((drink, i) => (
        <Card setSingleDrink={setSingleDrink} drink={drink} key={i} />
      ))}
    </div>
  );
};

export default Content;

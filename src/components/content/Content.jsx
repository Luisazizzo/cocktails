import styles from "./index.module.scss";
import Card from "../card";
import { filteredList } from "../utils/func";

const Content = ({ data, category, setSingleDrink }) => {
  return (
    <div className={styles.Content}>
      {filteredList(data, "strCategory", category).map((drink, i) => (
        <Card setSingleDrink={setSingleDrink} drink={drink} key={i} />
      ))}
    </div>
  );
};

export default Content;

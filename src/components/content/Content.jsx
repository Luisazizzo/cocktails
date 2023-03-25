import styles from "./index.module.scss";
import Card from "../card";

const Content = ({ data, setSingleDrink, setIndice }) => {
  return (
    <div className={styles.Content}>
      {data.map((drink, i) => (
        <Card
          index={i}
          setIndice={setIndice}
          setSingleDrink={setSingleDrink}
          drink={drink}
          key={i}
        />
      ))}
    </div>
  );
};

export default Content;

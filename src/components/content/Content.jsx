import styles from "./index.module.scss";
import Card from "../card";
import { BiLoaderAlt } from "react-icons/bi";

const Content = ({ data, setSingleDrink, setIndice, loader }) => {
  return (
    <div className={styles.Content}>
      {loader ? (
        <BiLoaderAlt className={styles.loader} />
      ) : data.length === 0 ? (
        <h3>Nessun cocktails per questa categoria</h3>
      ) : (
        data.map((drink, i) => (
          <Card
            index={i}
            setIndice={setIndice}
            setSingleDrink={setSingleDrink}
            drink={drink}
            key={i}
          />
        ))
      )}
    </div>
  );
};

export default Content;

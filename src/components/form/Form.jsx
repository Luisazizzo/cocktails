import styles from "./index.module.scss";

const Form = ({ setSearchInputValue, searchInputValue }) => {
  const array = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className={styles.Form}>
      {array.map((item, i) => (
        <p
          key={i}
          className={searchInputValue === item ? styles.active : null}
          onClick={() => setSearchInputValue(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Form;

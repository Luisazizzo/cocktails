import styles from "./index.module.scss";

const SelectLetter = ({ setSelectLetterValue, selectLetterValue }) => {
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
    <div className={styles.SelectLetter}>
      {array.map((item, i) => (
        <p
          key={i}
          className={selectLetterValue === item ? styles.active : null}
          onClick={() => setSelectLetterValue(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default SelectLetter;

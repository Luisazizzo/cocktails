import "./index.scss";

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
    <div className="Form">
      {array.map((item) => (
        <p
          className={searchInputValue === item && "active"}
          onClick={() => setSearchInputValue(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default Form;

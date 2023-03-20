import "./index.scss";

const Form = ({ setSearchInputValue, searchInputValue }) => {
  const onHandle = (e) => {
    setSearchInputValue(() => e.target.value);
  };
  return (
    <div className="Form">
      <label>
        Scrivi una letera, ti darò tutti i cocktails che iniziano con la lettera
        da te scelta
      </label>
      <input
        value={searchInputValue}
        onChange={onHandle}
        type="text"
        placeholder="Srivi una lettera"
      />
    </div>
  );
};

export default Form;

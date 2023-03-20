import Card from "../card";
import { filteredList } from "../utils/func";
import "./index.scss";

const Content = ({ data, category }) => {
  return (
    <div className="Content">
      {filteredList(data, "strCategory", category).map((drink) => (
        <Card drink={drink} />
      ))}
    </div>
  );
};

export default Content;

import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Content from "./components/content";
import { GET } from "./components/utils/http";
import { useState, useEffect } from "react";
import Form from "./components/form";
import SingleDrink from "./components/singleDrink";
import Footer from "./components/footer";
import "./App.scss";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("a");
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [singleDrink, setSingleDrink] = useState({
    visible: false,
    payload: {},
  });

  useEffect(() => {
    if (searchInputValue !== "") {
      GET("/search.php?f=" + searchInputValue).then(({ drinks }) => {
        setCocktailList(() => drinks);
      });
    }
  }, [searchInputValue]);

  return (
    <div className="App">
      <NavBar />
      {singleDrink.visible ? (
        <SingleDrink
          data={singleDrink.payload}
          setSingleDrink={setSingleDrink}
        />
      ) : (
        <>
          {" "}
          <Hero setCategory={setCategory} />
          <Form
            searchInputValue={searchInputValue}
            setSearchInputValue={setSearchInputValue}
          />
          <Content
            setSingleDrink={setSingleDrink}
            data={cocktailList}
            category={category}
          />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;

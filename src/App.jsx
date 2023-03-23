import NavBar from "./components/navBar";
import Hero from "./components/hero";
import Content from "./components/content";
import { GET } from "./components/utils/http";
import { useState, useEffect } from "react";
import SelectLetter from "./components/selectLetter";
import SingleDrink from "./components/singleDrink";
import Footer from "./components/footer";
import ModalForm from "./components/modalForm";
import PopUp from "./components/popUp";
import "./App.scss";

function App() {
  const [cognome, setCognome] = useState("");
  const [persone, setPersone] = useState("");
  const [data, setData] = useState("");
  const [ora, setOra] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [formPrenota, setFormPrenota] = useState(false);
  const [selectLetterValue, setSelectLetterValue] = useState("a");
  const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");
  const [singleDrink, setSingleDrink] = useState({
    visible: false,
    payload: {},
  });

  const timeOut = () => {
    setTimeout(() => {
      setCognome("");
      setData("");
      setOra("");
      setPersone("");
      setPopUp(false);
    }, 2000);
  };

  useEffect(() => {
    if (selectLetterValue !== "") {
      GET("/search.php?f=" + selectLetterValue).then(({ drinks }) => {
        setCocktailList(() => drinks);
      });
    }
  }, [selectLetterValue]);

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
          <Hero setCategory={setCategory} setFormPrenota={setFormPrenota} />
          <SelectLetter
            selectLetterValue={selectLetterValue}
            setSelectLetterValue={setSelectLetterValue}
          />
          <Content
            setSingleDrink={setSingleDrink}
            data={cocktailList}
            category={category}
          />
        </>
      )}
      <Footer />
      {formPrenota && (
        <ModalForm
          timeOut={timeOut}
          setFormPrenota={setFormPrenota}
          cognome={cognome}
          setCognome={setCognome}
          persone={persone}
          setPersone={setPersone}
          data={data}
          setData={setData}
          ora={ora}
          setOra={setOra}
          setPopUp={setPopUp}
        />
      )}
      {popUp && (
        <PopUp setPopUp={setPopUp}>
          <p>
            Grazie! <span>{cognome}</span>, il tuo tavolo è stato prenotato per
            giorno <span> {data.split("-").reverse().join("-")}</span>,alle ore:{" "}
            <span>{ora}</span>,per <span>{persone}</span>persone.
          </p>
        </PopUp>
      )}
    </div>
  );
}

export default App;

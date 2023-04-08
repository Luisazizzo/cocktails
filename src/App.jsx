import NavBar from "./components/navBar";
import { filteredList } from "./components/utils/func";
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
import ErrorToast from "./components/errorToast";

function App() {
  const [indice, setIndice] = useState(0);
  const [cognome, setCognome] = useState("");
  const [persone, setPersone] = useState("");
  const [data, setData] = useState("");
  const [ora, setOra] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [formPrenota, setFormPrenota] = useState(false);
  const [error, setError] = useState(null);
  const [selectLetterValue, setSelectLetterValue] = useState("a");
  const [cocktailList, setCocktailList] = useState([]);
  const [loader, setLoader] = useState(false);
  const [category, setCategory] = useState("Cocktail");
  const [singleDrink, setSingleDrink] = useState({
    visible: false,
    payload: [],
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
      setLoader(true);
      GET("/search.php?f=" + selectLetterValue).then((data) => {
        setLoader(false);
        if (data.error) {
          setError(data.error);
        } else {
          setCocktailList(() => data.drinks);
        }
      });
    }
  }, [selectLetterValue]);

  return (
    <div className="App">
      {error && <ErrorToast error={error} setError={setError} />}
      <NavBar />
      {singleDrink.visible ? (
        <SingleDrink
          cocktailList={filteredList(cocktailList, "strCategory", category)}
          setIndice={setIndice}
          data={filteredList(cocktailList, "strCategory", category)[indice]}
          setSingleDrink={setSingleDrink}
        />
      ) : (
        <>
          <Hero setCategory={setCategory} setFormPrenota={setFormPrenota} />
          <SelectLetter
            selectLetterValue={selectLetterValue}
            setSelectLetterValue={setSelectLetterValue}
          />
          <Content
            loader={loader}
            setIndice={setIndice}
            setSingleDrink={setSingleDrink}
            data={filteredList(cocktailList, "strCategory", category)}
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

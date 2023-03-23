import { BiChevronLeftCircle } from "react-icons/bi";
import styles from "./index.module.scss";

const ModalForm = ({
  timeOut,
  setFormPrenota,
  cognome,
  setCognome,
  persone,
  setPersone,
  data,
  setData,
  ora,
  setOra,
  setPopUp,
}) => {
  const cognomeInput = (e) => setCognome(e.target.value);
  const personeInput = (e) => setPersone(e.target.value);
  const dataInput = (e) => setData(e.target.value);
  const oraInput = (e) => setOra(e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setPopUp(true);
    setFormPrenota(false);
    timeOut();
  };

  const closeModalForm = () => {
    setFormPrenota(false);
  };

  return (
    <div className={styles.ModalForm}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <BiChevronLeftCircle
            className={styles.close}
            onClick={closeModalForm}
          />
          <h3>Prenota il tuo tavolo</h3>
          <form className={styles.form} onSubmit={onHandleSubmit}>
            <input
              value={cognome}
              onChange={cognomeInput}
              type="text"
              placeholder="Cognome"
              required
            />
            <input
              value={persone}
              onChange={personeInput}
              type="number"
              placeholder="Quanti siete?"
              required
            />
            <input value={data} onChange={dataInput} type="date" required />
            <input value={ora} onChange={oraInput} type="time" required />
            <input type="submit" value="Prenota" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;

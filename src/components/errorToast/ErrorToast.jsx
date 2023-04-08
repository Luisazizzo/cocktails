import styles from "./index.module.scss";
import { BiX } from "react-icons/bi";
const ErrorToast = ({ error, setError }) => {
  return (
    <div className={styles.ErrorToast}>
      <BiX onClick={() => setError(null)} className={styles.close} />
      <p>{error}</p>
    </div>
  );
};

export default ErrorToast;

import styles from "./index.module.scss";

const PopUp = ({ children }) => {
  return <div className={styles.PopUp}>{children}</div>;
};

export default PopUp;

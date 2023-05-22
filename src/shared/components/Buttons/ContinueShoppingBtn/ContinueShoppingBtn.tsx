import { useNavigate } from "react-router-dom";
import styles from "./ContinueShoppingBtn.module.scss";

const ContinueShoppingBtn = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/home")}
      className={styles.continueShoppingBtn}
    >
      Continue Shopping
    </button>
  );
};

export default ContinueShoppingBtn;

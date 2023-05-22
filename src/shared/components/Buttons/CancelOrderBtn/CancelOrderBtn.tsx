import { useNavigate } from "react-router-dom";
import styles from "./CancelOrderBtn.module.scss";

const CancelOrderBtn = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/shopping-cart")}
      className={styles.cancelOrder}
    >
      Cancel Order
    </button>
  );
};

export default CancelOrderBtn;

import { useParams } from "react-router-dom";
import styles from "./PlaceOrderBtn.module.scss";

const PlaceOrderBtn = ({ onConfirmed }: { onConfirmed: () => void }) => {
  const { orderIdUrl } = useParams();
  const orderId = orderIdUrl ? +orderIdUrl : 0;

  return (
    <button
      className={styles.placeOrder}
      type="button"
      onClick={() => onConfirmed()}
    >
      {orderId ? "Update Order" : "Place order"}
    </button>
  );
};

export default PlaceOrderBtn;

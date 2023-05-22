import { OrdersModel } from "../../../shared/constants/ordersData";
import { useNavigate } from "react-router-dom";
import BookIcon from "../../../shared/utils/graphics/icons/BookIcon";
import EditIcon from "../../../shared/utils/graphics/icons/EditIcon";
import styles from "./OrderItem.module.scss";

const OrderItem = ({ order }: { order: OrdersModel }) => {
  const { orderId, status, totalQuantity, price } = order;
  const navigate = useNavigate();

  return (
    <span className={styles.orderItem}>
      <div className={styles.bookIcon}>
        <BookIcon className={styles.icon} />
      </div>

      <div className={styles.rightSide}>
        <div className={styles.orderNumber}>
          <h1>Order # {orderId}</h1>
          <h3>
            items: <b>{totalQuantity}</b>
          </h3>

          <h4>
            Delivery Status: {""}
            <b>{status}</b>
          </h4>
        </div>
        <div className={styles.priceEdit}>
          <p>${price}</p>
          {status === "In Progress" ? (
            <button onClick={() => navigate(`/orders-edit/${orderId}`)}>
              <EditIcon className={styles.editIcon} />
              Edit Order Details
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </span>
  );
};

export default OrderItem;

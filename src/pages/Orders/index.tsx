import { orders } from "../../shared/constants/ordersData";
import OrderList from "./OrderList";
import styles from "./Orders.module.scss";

const Orders = () => {
  return (
    <section className={styles.ordersPage}>
      <h1> Your orders:</h1>
      <OrderList orders={orders} />
    </section>
  );
};

export default Orders;

import { OrdersModel } from "../../shared/constants/ordersData";
import OrderItem from "./OrderItem";

const OrderList = ({ orders }: { orders: OrdersModel[] }) => {
  return (
    <>
      {orders.map((order) => {
        return <OrderItem key={order.orderId} order={order} />;
      })}
    </>
  );
};

export default OrderList;

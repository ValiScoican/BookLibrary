import { Fragment } from "react";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import CartItem from "../CartItem";

const CartList = () => {
  const { cartItems } = useShoppingCart();
  return (
    <section>
      {cartItems.map((item) => (
        <Fragment key={item.id}>
          <CartItem {...item} />
        </Fragment>
      ))}
    </section>
  );
};

export default CartList;

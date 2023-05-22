import styles from "./ShoppingCart.module.scss";
import ContinueShoppingBtn from "../../shared/components/Buttons/ContinueShoppingBtn/ContinueShoppingBtn";
import PlaceOrderBtn from "../../shared/components/Buttons/PlaceOrder/PlaceOrderBtn";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartList from "./CartList";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/LoginContext";

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart();
  const { userLogin } = useUserAuth();
  const navigate = useNavigate();

  return (
    <section className={styles.shoppingCart}>
      <h1> Your products:</h1>
      {userLogin.email === undefined && (
        <span className={styles.userNotLogged}>
          You must be logged in to place an order.
        </span>
      )}
      {cartItems.length === 0 && (
        <span className={styles.cartEmpty}> Your cart is empty</span>
      )}
      <CartList />
      <div className={styles.totalCost}>
        <h3>Total:</h3>
        <h4>
          ${" "}
          {cartItems.reduce((total, cartItem) => {
            return total + (cartItem.price || 0) * cartItem.quantity;
          }, 0)}
        </h4>
      </div>
      <div className={styles.buttons}>
        <ContinueShoppingBtn />
        <PlaceOrderBtn
          onConfirmed={() => {
            userLogin.email === undefined
              ? navigate("/login")
              : cartItems.length === 0
              ? navigate("/home")
              : navigate("/order-details");
          }}
        />
      </div>
    </section>
  );
};

export default ShoppingCart;

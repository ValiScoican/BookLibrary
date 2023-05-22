import CartIcon from "../../../utils/graphics/icons/CartIcon";
import styles from "./AddToCartBtn.module.scss";

const AddToCartBtn = ({ addToCart }: { addToCart: () => void }) => {
  return (
    <button onClick={() => addToCart()} className={styles.cartButton}>
      <CartIcon className={styles.cartIcon} />
      Add to cart
    </button>
  );
};

export default AddToCartBtn;

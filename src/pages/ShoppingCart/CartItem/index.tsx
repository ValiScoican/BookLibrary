import styles from "./CartItem.module.scss";
import TrashIcon from "../../../shared/utils/graphics/icons/TrashIcon";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { StoreItemsModel } from "../../../models/StoreItemsModel";
import bookData from "../../../shared/constants/BookCover";
import { BookListModel } from "../../../models/BookListModel";

const CartItem = ({ id, quantity, title, price, author }: StoreItemsModel) => {
  const { removeFromCart } = useShoppingCart();
  const currBook = bookData.find((book) => book.id === id) as BookListModel;
  return (
    <span className={styles.cartItem}>
      <img
        className={styles.imgBookCover}
        src={currBook.img}
        alt="HeroWithGold"
      />
      <div className={styles.rightSide}>
        <div className={styles.titleAuthor}>
          <h1>{title}</h1>
          <h3>
            by <b>{author}</b>
          </h3>
          {quantity > 0 ? (
            <h4>
              <i>Quantity: {quantity} in cart</i>
            </h4>
          ) : null}
        </div>
        <div className={styles.priceRemove}>
          <p>${price * quantity}</p>
          <button onClick={() => removeFromCart(id)}>
            <TrashIcon className={styles.trashIcon} />
            Remove
          </button>
        </div>
      </div>
    </span>
  );
};

export default CartItem;

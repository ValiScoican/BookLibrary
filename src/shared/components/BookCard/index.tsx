import styles from "./BookCard.module.scss";
import { BookListModel } from "../../../models/BookListModel";
import AddToCartBtn from "../Buttons/AddToCartBtn";
import { useNavigate } from "react-router-dom";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

const BookCard = ({ book }: { book: BookListModel }) => {
  const { img, title, price, author, id } = book;
  const { addToCart } = useShoppingCart();
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <img
        onClick={() => navigate(`/book-detail/${id}`)}
        src={img}
        alt={title}
      />
      <div className={styles.titlePrice}>
        <h2>{title}</h2>
        <p>${price}</p>
      </div>
      <div className={styles.author}>
        <p>{author}</p>
      </div>
      <AddToCartBtn addToCart={() => addToCart(id)} />
    </div>
  );
};

export default BookCard;

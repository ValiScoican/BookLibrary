import styles from "./BookDetail.module.scss";
import AddToCartBtn from "../../shared/components/Buttons/AddToCartBtn";
import { Navigate, useParams } from "react-router-dom";
import { bookWithDescription } from "../../shared/constants/BookCover";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const BookDetail = () => {
  const { bookId } = useParams();
  const { addToCart } = useShoppingCart();
  const bookDetails = bookWithDescription.find((book) => book.id === bookId);
  if (!!bookDetails) {
    return (
      <main className={styles.container}>
        <img
          className={styles.imgHolder}
          src={bookDetails.img}
          alt={bookDetails.title}
        />
        <section className={styles.details}>
          <header>
            <div className={styles.firstLine}>
              <h1>{bookDetails.title}</h1>
              <h2>${bookDetails.price}</h2>
            </div>
            <span>
              by <strong>{bookDetails.author}</strong>
            </span>
          </header>
          <div className={styles.description}>
            <p>{bookDetails.description}</p>
          </div>
          <AddToCartBtn addToCart={() => addToCart(bookId as string)} />
        </section>
      </main>
    );
  }
  return <Navigate replace to={"/404"} />;
};

export default BookDetail;

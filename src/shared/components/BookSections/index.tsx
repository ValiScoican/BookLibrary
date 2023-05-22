import bookData from "../../constants/BookCover";
import BookList from "../BookList";
import styles from "./BookSections.module.scss";

const BookSections = () => {
  return (
    <div className={styles.container}>
      <p className={styles.sectionsTitleBest}>Best boks of the month</p>
      <BookList books={bookData.filter((book) => book.kind === "best")} />
      <p className={styles.sectionsTitleRecent}>Recently added</p>
      <BookList books={bookData.filter((book) => book.kind === "recently")} />
    </div>
  );
};

export default BookSections;

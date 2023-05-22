import { BookListModel } from "../../../models/BookListModel";
import BookCard from "../BookCard/index";
import styles from "./BookList.module.scss";

const BookList = ({books}:{books:BookListModel[]}) => {
  return (
    <div className={styles.wrapper}>
      {books.map((listing) => {
        return (
          <div key={listing.id}>
            <BookCard
            book={listing}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;

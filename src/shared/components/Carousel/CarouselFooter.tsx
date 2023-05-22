import { CarouselFooterProps } from "../../../models/CarouselFooterProps";
import styles from "./Carousel.module.scss";

const CarouselFooter = ({ currentIndex, setCurrentIndex }: CarouselFooterProps) => {
  return (
    <footer className={styles.allLines}>
      {Array.from({ length: 3 }).map((_, index) => (
        <button
        key={index}
          onClick={() => setCurrentIndex(index)}
          className={
            currentIndex === index
              ? `${styles.line} ${styles.active}`
              : styles.line
          }
        ></button>
      ))}
    </footer>
  );
};

export default CarouselFooter;

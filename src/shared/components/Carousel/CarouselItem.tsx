import { CarouselDataModel } from "../../../models/CarouselDataModel";
import styles from "./Carousel.module.scss";

const CarouselItem = ({ item }: { item: CarouselDataModel }) => {
  const { title, description, img } = item;
  return (
    <main>
      <div className={styles.carouselTextImg}>
        <div className={styles.carouselText}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles.carouselImg}>{img}</div>
      </div>
    </main>
  );
};

export default CarouselItem;

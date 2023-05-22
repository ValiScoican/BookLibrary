import styles from "./Carousel.module.scss";
import { useEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import carouselData from "../../constants/CarouselData";
import CarouselFooter from "./CarouselFooter";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.carouselContainer}>
      <CarouselItem item={carouselData[currentIndex]} />
      <CarouselFooter setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} />
    </div>
  );
};

export default Carousel;

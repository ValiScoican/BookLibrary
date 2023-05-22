import SvgFloatingBook from "../utils/graphics/carousel/SvgFloatingBook";
import SvgMoreBooks from "../utils/graphics/carousel/SvgMoreBooks";
import SvgLamp from "../utils/graphics/carousel/SvgLamp";
import { CarouselDataModel } from "../../models/CarouselDataModel";

const carouselData: CarouselDataModel[] = [
  {
    title: "Buy textbooks for the best price.",
    description:
      "From applied literature to educational resources, we have a lots of textbooks to offer you. We sell only the best books.",
    img: <SvgFloatingBook />,
  },
  {
    title: "One book can change your life.",
    description:
      " Your story isn't over just because there was a bad chapter, soo.. keep reading",
    img: <SvgMoreBooks />,
  },
  {
    title: "All you need is a library card.",
    description:
      "Books are the best way to escape reality and also Knowledge is POWER.",
    img: <SvgLamp />,
  },
];

export default carouselData;

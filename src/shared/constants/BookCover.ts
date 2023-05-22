import { BookDetailDescription } from "../../models/BookDetailModel";
import { BookListModel } from "../../models/BookListModel";
import { StoreItemsModel } from "../../models/StoreItemsModel";

const importBookImages = (r: __WebpackModuleApi.RequireContext) => {
  const images: { [key: string]: string } = {};

  r.keys().map((item) => (images[item.replace("./", "")] = r(item)));

  return images;
};

const images = importBookImages(require.context("./books", false, /\.(jpg)$/));

export const bookData: BookListModel[] = [
  {
    id: "1",
    img: images["HeroWithGold.jpg"],
    title: "Hero With Gold",
    price: 90,
    author: "Dougie Rogers",
    kind: "best"
  },
  {
    id: "2",
    img: images["GoddessOfInsanity.jpg"],
    title: "Goddess Of Insanity",
    price: 50,
    author: "Dennis Jenkins",
    kind: "best"
  },
  {
    id: "3",
    img: images["ThievesOfTheLost.jpg"],
    title: "Thieves Of The Lost World Of Great",
    price: 90,
    author: "Quinn Holland",
    kind: "best"
  },
  {
    id: "4",
    img: images["HuntersOfUtopia.jpg"],
    title: "Hunters Of Utopia",
    price: 90,
    author: "Cole Porter",
    kind: "best"
  },
  {
    id: "5",
    img: images["LordsAndGods.jpg"],
    title: "Lords And Gods",
    price: 90,
    author: "Elis Booth",
    kind: "best"
  },
  {
    id: "6",
    img: images["GirlsAndOfficers.jpg"],
    title: "Girls And Officers",
    price: 90,
    author: "Victor Miller",
    kind: "best"
  },
  {
    id: "7",
    img: images["HeroWithGoldV2.jpg"],
    title: "Hero With Gold",
    price: 90,
    author: "Dougie Rogers",
    kind: "recently"
  },
  {
    id: "8",
    img: images["GoddessOfInsanityV2.jpg"],
    title: "Goddess Of Insanity",
    price: 50,
    author: "Dennis Jenkins",
    kind: "recently"
  },
  {
    id: "9",
    img: images["ThievesOfTheLostV2.jpg"],
    title: "Thieves Of The Lost World Of Great",
    price: 90,
    author: "Quinn Holland",
    kind: "recently"
  },
  {
    id: "10",
    img: images["HuntersOfUtopiaV2.jpg"],
    title: "Hunters Of Utopia",
    price: 90,
    author: "Cole Porter",
    kind: "recently"
  },
  {
    id: "11",
    img: images["LordsAndGodsV2.jpg"],
    title: "Lords And Gods",
    price: 90,
    author: "Elis Booth",
    kind: "recently"
  },
  {
    id: "12",
    img: images["GirlsAndOfficersV2.jpg"],
    title: "Girls And Officers",
    price: 90,
    author: "Victor Miller",
    kind: "recently"
  },
];
export default bookData;

export const bookWithDescription: BookDetailDescription[] = [
  {
    id: "1",
    img: images["HeroWithGold.jpg"],
    title: "Hero With Gold",
    price: 90,
    author: "Dougie Rogers",
    kind: "best",
    description:"Lorem Lorem"
  },
  {
    id: "2",
    img: images["GoddessOfInsanity.jpg"],
    title: "Goddess Of Insanity",
    price: 50,
    author: "Dennis Jenkins",
    kind: "best",
    description:"Lorem Lorem"
  },
  {
    id: "3",
    img: images["ThievesOfTheLost.jpg"],
    title: "Thieves Of The Lost World Of Great",
    price: 90,
    author: "Quinn Holland",
    kind: "best",
    description:"Lorem Lorem"
  },
  {
    id: "4",
    img: images["HuntersOfUtopia.jpg"],
    title: "Hunters Of Utopia",
    price: 90,
    author: "Cole Porter",
    kind: "best",
    description:"Lorem Lorem"
  },
  {
    id: "5",
    img: images["LordsAndGods.jpg"],
    title: "Lords And Gods",
    price: 90,
    author: "Elis Booth",
    kind: "best",
    description:"Lorem Lorem"
  },
  {
    id: "6",
    img: images["GirlsAndOfficers.jpg"],
    title: "Girls And Officers",
    price: 90,
    author: "Victor Miller",
    kind: "best",
    description:"Lorem Lorem"
  },
  {
    id: "7",
    img: images["HeroWithGoldV2.jpg"],
    title: "Hero With Gold",
    price: 90,
    author: "Dougie Rogers",
    kind: "recently",
    description:"Lorem Lorem"
  },
  {
    id: "8",
    img: images["GoddessOfInsanityV2.jpg"],
    title: "Goddess Of Insanity",
    price: 50,
    author: "Dennis Jenkins",
    kind: "recently",
    description:"Lorem Lorem"
  },
  {
    id: "9",
    img: images["ThievesOfTheLostV2.jpg"],
    title: "Thieves Of The Lost World Of Great",
    price: 90,
    author: "Quinn Holland",
    kind: "recently",
    description:"Lorem Lorem"
  },
  {
    id: "10",
    img: images["HuntersOfUtopiaV2.jpg"],
    title: "Hunters Of Utopia",
    price: 90,
    author: "Cole Porter",
    kind: "recently",
    description:"Lorem Lorem"
  },
  {
    id: "11",
    img: images["LordsAndGodsV2.jpg"],
    title: "Lords And Gods",
    price: 90,
    author: "Elis Booth",
    kind: "recently",
    description:"Lorem Lorem"
  },
  {
    id: "12",
    img: images["GirlsAndOfficersV2.jpg"],
    title: "Girls And Officers",
    price: 90,
    author: "Victor Miller",
    kind: "recently",
    description:"Lorem Lorem"
  },
];

export const storeItems: StoreItemsModel[] = [
  // {
  //   id: "1",
  //   title: "Hero With Gold",
  //   price: 90,
  //   author: "Dougie Rogers",
  //   quantity: 2,
  // },
  // {
  //   id: "2",
  //   title: "Goddess Of Insanity",
  //   price: 50,
  //   author: "Dennis Jenkins",
  //   quantity: 2,
  // }
]
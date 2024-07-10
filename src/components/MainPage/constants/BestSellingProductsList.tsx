import { StaticImageData } from "next/image";
import { Bag, Bookself, Coat, Cooler } from "../../../shared/assets/MainPage";

interface IBestSellingProductsList {
  id: number;
  image: StaticImageData;
  imageTitle: string;
  title: string;
  currentPrice: number;
  prevPrice?: number;
  rating: number;
}

export const BestSellingProductsList: IBestSellingProductsList[] = [
  {
    id: 1,
    image: Coat,
    imageTitle: "Coat",
    title: "The north coat",
    currentPrice: 360,
    prevPrice: 260,
    rating: 65,
  },
  {
    id: 2,
    image: Bag,
    imageTitle: "Bag",
    title: "Gucci duffle bag",
    currentPrice: 1160,
    prevPrice: 960,
    rating: 65,
  },
  {
    id: 3,
    image: Cooler,
    imageTitle: "Cooler",
    title: "RGB liquid CPU Cooler",
    currentPrice: 170,
    prevPrice: 160,
    rating: 65,
  },
  {
    id: 4,
    image: Bookself,
    imageTitle: "Bookself",
    title: "Small BookSelf",
    currentPrice: 360,
    rating: 65,
  },
];

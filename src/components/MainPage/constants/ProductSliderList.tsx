import { StaticImageData } from "next/image";
import {
  Chair,
  Gamepad,
  Keyboard,
  Monitor,
} from "../../../shared/assets/MainPage";

interface IProductSliderList {
  id: number;
  image: StaticImageData;
  imageTitle: string;
  discount: string;
  title: string;
  currentPrice: number;
  prevPrice?: number;
  rating: number;
}

export const ProductSliderList: IProductSliderList[] = [
  {
    id: 1,
    image: Gamepad,
    imageTitle: "Gamepad",
    discount: "40%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    prevPrice: 160,
    rating: 88,
  },
  {
    id: 2,
    image: Keyboard,
    imageTitle: "Keyboard",
    discount: "35%",
    title: "AK-900 Wired Keyboard",
    currentPrice: 960,
    prevPrice: 1160,
    rating: 75,
  },
  {
    id: 3,
    image: Monitor,
    imageTitle: "Monitor",
    discount: "30%",
    title: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 4,
    image: Chair,
    imageTitle: "Chair",
    discount: "25%",
    title: "S-Series Comfort Chair ",
    currentPrice: 375,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 5,
    image: Chair,
    imageTitle: "Chair",
    discount: "25%",
    title: "S-Series Comfort Chair ",
    currentPrice: 375,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 6,
    image: Monitor,
    imageTitle: "Monitor",
    discount: "30%",
    title: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 7,
    image: Gamepad,
    imageTitle: "Gamepad",
    discount: "40%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    prevPrice: 160,
    rating: 88,
  },
  {
    id: 8,
    image: Keyboard,
    imageTitle: "Keyboard",
    discount: "35%",
    title: "AK-900 Wired Keyboard",
    currentPrice: 960,
    prevPrice: 1160,
    rating: 75,
  },
];

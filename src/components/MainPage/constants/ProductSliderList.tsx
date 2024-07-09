import { StaticImageData } from "next/image";
import {
  Chair,
  Gamepad,
  Keyboard,
  Monitor,
} from "../../../shared/assets/MainPage";

interface IProductSliderList {
  id: number;
  picture: StaticImageData;
  discount: string;
  title: string;
  currentPrice: number;
  prevPrice: number;
  rating: number;
}

export const ProductSliderList: IProductSliderList[] = [
  {
    id: 1,
    picture: Gamepad,
    discount: "40%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    prevPrice: 160,
    rating: 88,
  },
  {
    id: 2,
    picture: Keyboard,
    discount: "35%",
    title: "AK-900 Wired Keyboard",
    currentPrice: 960,
    prevPrice: 1160,
    rating: 75,
  },
  {
    id: 3,
    picture: Monitor,
    discount: "30%",
    title: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 4,
    picture: Chair,
    discount: "25%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: 375,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 5,
    picture: Chair,
    discount: "25%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: 375,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 6,
    picture: Monitor,
    discount: "30%",
    title: "IPS LCD Gaming Monitor",
    currentPrice: 370,
    prevPrice: 400,
    rating: 99,
  },
  {
    id: 7,
    picture: Gamepad,
    discount: "40%",
    title: "HAVIT HV-G92 Gamepad",
    currentPrice: 120,
    prevPrice: 160,
    rating: 88,
  },
  {
    id: 8,
    picture: Keyboard,
    discount: "35%",
    title: "AK-900 Wired Keyboard",
    currentPrice: 960,
    prevPrice: 1160,
    rating: 75,
  },
];

import { StaticImageData } from "next/image";
import { Iphone14 } from "../../../shared/assets/MainPage";

interface ICategorySectionSlider {
  id: number;
  photo: StaticImageData;
}

export const CategorySectionSlider: ICategorySectionSlider[] = [
  {
    id: 1,
    photo: Iphone14,
  },
  {
    id: 2,
    photo: Iphone14,
  },
  {
    id: 3,
    photo: Iphone14,
  },
  {
    id: 4,
    photo: Iphone14,
  },
  {
    id: 5,
    photo: Iphone14,
  },
];

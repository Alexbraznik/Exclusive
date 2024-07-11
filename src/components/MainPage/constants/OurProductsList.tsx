import { StaticImageData } from "next/image";
import {
  CanonCamera,
  Car,
  Curology,
  DogFood,
  Jacket,
  Laptop,
  Sneakers,
  USBGamepad,
} from "../../../shared/assets/MainPage";

interface IOurProductsList {
  id: number;
  image: StaticImageData;
  imageTitle: string;
  title: string;
  newProduct?: boolean;
  currentPrice: number;
  ChooseСolor?: boolean;
  colorOne?: string;
  rating: number;
}

export const OurProductsList: IOurProductsList[] = [
  {
    id: 1,
    image: DogFood,
    imageTitle: "DogFood",
    title: "Breed Dry Dog Food",
    currentPrice: 100,
    rating: 35,
  },
  {
    id: 2,
    image: CanonCamera,
    imageTitle: "CanonCamera",
    title: "CANON EOS DSLR Camera",
    currentPrice: 360,
    rating: 95,
  },
  {
    id: 3,
    image: Laptop,
    imageTitle: "Laptop",
    title: "ASUS FHD Gaming Laptop",
    currentPrice: 700,
    rating: 325,
  },
  {
    id: 4,
    image: Curology,
    imageTitle: "Curology",
    title: "Curology Product Set",
    currentPrice: 500,
    rating: 145,
  },
  {
    id: 5,
    image: Car,
    imageTitle: "Car",
    title: "Kids Electric Car",
    newProduct: true,
    currentPrice: 960,
    ChooseСolor: true, // изменить
    colorOne: "Crimson",
    rating: 65,
  },
  {
    id: 6,
    image: Sneakers,
    imageTitle: "Sneakers",
    title: "Jr. Zoom Soccer Cleats",
    newProduct: true,
    currentPrice: 1160,
    ChooseСolor: true, // изменить
    colorOne: "Yellow",
    rating: 35,
  },
  {
    id: 7,
    image: USBGamepad,
    imageTitle: "USBGamepad",
    title: "GP11 Shooter USB Gamepad",
    newProduct: true,
    currentPrice: 660,
    ChooseСolor: true, // изменить
    colorOne: "Black",
    rating: 55,
  },
  {
    id: 8,
    image: Jacket,
    imageTitle: "Jacket",
    title: "Quilted Satin Jacket",
    currentPrice: 660,
    ChooseСolor: true, // изменить
    colorOne: "Black",
    rating: 55,
  },
  {
    id: 9,
    image: CanonCamera,
    imageTitle: "CanonCamera",
    title: "CANON EOS DSLR Camera",
    currentPrice: 360,
    rating: 95,
  },
  {
    id: 10,
    image: Laptop,
    imageTitle: "Laptop",
    title: "ASUS FHD Gaming Laptop",
    currentPrice: 700,
    rating: 325,
  },
  {
    id: 11,
    image: Sneakers,
    imageTitle: "Sneakers",
    title: "Jr. Zoom Soccer Cleats",
    newProduct: true,
    currentPrice: 1160,
    ChooseСolor: true, // изменить
    colorOne: "Yellow",
    rating: 35,
  },
  {
    id: 12,
    image: Jacket,
    imageTitle: "Jacket",
    title: "Quilted Satin Jacket",
    currentPrice: 660,
    ChooseСolor: true, // изменить
    colorOne: "Black",
    rating: 55,
  },
  {
    id: 13,
    image: CanonCamera,
    imageTitle: "CanonCamera",
    title: "CANON EOS DSLR Camera",
    currentPrice: 360,
    rating: 95,
  },
  {
    id: 14,
    image: Laptop,
    imageTitle: "Laptop",
    title: "ASUS FHD Gaming Laptop",
    currentPrice: 700,
    rating: 325,
  },
  {
    id: 15,
    image: CanonCamera,
    imageTitle: "CanonCamera",
    title: "CANON EOS DSLR Camera",
    currentPrice: 360,
    rating: 95,
  },
  {
    id: 17,
    image: Laptop,
    imageTitle: "Laptop",
    title: "ASUS FHD Gaming Laptop",
    currentPrice: 700,
    rating: 325,
  },
  {
    id: 18,
    image: CanonCamera,
    imageTitle: "CanonCamera",
    title: "CANON EOS DSLR Camera",
    currentPrice: 360,
    rating: 95,
  },
  {
    id: 19,
    image: Laptop,
    imageTitle: "Laptop",
    title: "ASUS FHD Gaming Laptop",
    currentPrice: 700,
    rating: 325,
  },
];

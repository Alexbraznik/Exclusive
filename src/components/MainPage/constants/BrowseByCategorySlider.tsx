import {
  Camera,
  Computers,
  Gaming,
  HeadPhones,
  Phones,
  SmartWatch,
} from "../../../shared/assets/MainPage";

interface IBrowseByCategorySlider {
  id: number;
  image: JSX.Element;
  title: string;
}

export const BrowseByCategorySlider: IBrowseByCategorySlider[] = [
  {
    id: 1,
    image: <Phones />,
    title: "Phones",
  },
  {
    id: 2,
    image: <Computers />,
    title: "Computers",
  },
  {
    id: 3,
    image: <SmartWatch />,
    title: "SmartWatch",
  },
  {
    id: 4,
    image: <Camera />,
    title: "Camera",
  },
  {
    id: 5,
    image: <HeadPhones />,
    title: "HeadPhones",
  },
  {
    id: 6,
    image: <Computers />,
    title: "Gaming",
  },
  {
    id: 7,
    image: <SmartWatch />,
    title: "Gaming",
  },
  {
    id: 8,
    image: <Gaming />,
    title: "Gaming",
  },
  {
    id: 9,
    image: <Phones />,
    title: "Gaming",
  },
  {
    id: 10,
    image: <Gaming />,
    title: "Gaming",
  },
  {
    id: 11,
    image: <Computers />,
    title: "Gaming",
  },
  {
    id: 12,
    image: <HeadPhones />,
    title: "Gaming",
  },
];

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
  picture: JSX.Element;
  title: string;
}

export const BrowseByCategorySlider: IBrowseByCategorySlider[] = [
  {
    id: 1,
    picture: <Phones />,
    title: "Phones",
  },
  {
    id: 2,
    picture: <Computers />,
    title: "Computers",
  },
  {
    id: 3,
    picture: <SmartWatch />,
    title: "SmartWatch",
  },
  {
    id: 4,
    picture: <Camera />,
    title: "Camera",
  },
  {
    id: 5,
    picture: <HeadPhones />,
    title: "HeadPhones",
  },
  {
    id: 6,
    picture: <Gaming />,
    title: "Gaming",
  },
];

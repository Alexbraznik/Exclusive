interface IAdvantagesList {
  id: number;
  icon: JSX.Element;
  h3: string;
  p: string;
}

import {
  Delivery,
  Guatantee,
  Support,
} from "../../../../shared/assets/MainPage";

export const AdvantagesList: IAdvantagesList[] = [
  {
    id: 1,
    icon: <Delivery />,
    h3: "FREE AND FAST DELIVERY",
    p: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <Support />,
    h3: "24/7 CUSTOMER SERVICE",
    p: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    icon: <Guatantee />,
    h3: "MONEY BACK GUARANTEE",
    p: "We reurn money within 30 days",
  },
];

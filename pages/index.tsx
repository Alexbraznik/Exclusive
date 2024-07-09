import { MainPage } from "../src/components/MainPage";
import { TopHeader } from "../src/components/widgets";

export default function HomePage(): JSX.Element {
  return (
    <div>
      <TopHeader />
      <MainPage />
    </div>
  );
}

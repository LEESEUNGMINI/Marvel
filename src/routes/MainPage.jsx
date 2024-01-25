import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import LayOutColl from "../components/LayOutColl";
import { useQuery } from "react-query";
import { apiGetComics } from "./api";

export default function MainPage() {
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  console.log(data, isLoading);

  return (
    <>
      <Layout>
        {/* 메인 슬라이드 컴포넌트 */}
        <MainSlide />
        {/* 코믹스 섹션 */}
        <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        {/* Comics Section Image */}
        <LayOutColl>
          <div className="w-full h-60 bg-red-500">
            {data?.data?.results.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        </LayOutColl>
      </Layout>
    </>
  );
}

import { useQuery } from "react-query";
import Layout from "../components/Layout";
import TitleRotate from "../components/TitleRotate";
import { apiGetCharacters } from "./api";
import { Link } from "react-router-dom";

export default function Characters() {
  let characters;
  const { data, isLoading } = useQuery(
    ["getCharacters", { limit: 36 }],
    apiGetCharacters
  );

  if (!isLoading) {
    characters = data?.data.results;
  }

  console.log(characters);
  return (
    <Layout>
      {/* 캐릭터 서브페이지 이미지타이틀 */}
      <section className="relative w-full h-[400px]">
        <img
          className="h-full w-full object-cover"
          src="https://insidethemagic.net/wp-content/uploads/2023/02/black-panther-wakanda-forever-banner-women.jpg"
          alt="characters_image"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900 via-30% to-transparent"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-white text-center">
          <h1 className="text-4xl font-semibold py-2">MARVEL CHARACTERS</h1>
          <p>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </div>
      </section>
      {/* 리스트 */}
      <section className="w-full flex justify-center py-4">
        <div className="max-w-7xl w-full">
          {/* 제목 */}
          <TitleRotate text="featured characters" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {characters?.map((item, index) => (
              <div key={index} className="h-[340px] group cursor-pointer">
                <Link to={`/characters/${item.id}`}>
                  <div
                    style={{
                      clipPath:
                        "polygon(100% 0, 100% 95%, 90% 100%, 0 100%, 0 0)",
                    }}
                    className="w-full h-full flex flex-col bg-red-500"
                  >
                    {/* 이미지 */}
                    <div className="w-full h-[60%] overflow-hidden">
                      <img
                        className="w-full h-full object-cover duration-300 group-hover:scale-110"
                        src={`${item.thumbnail?.path}.${item.thumbnail.extension}`}
                        alt="character_image"
                      />
                    </div>
                    {/* 타이틀 */}
                    <div className="relative w-full h-[40%] flex items-end">
                      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between py-2 px-4 text-white">
                        <h2 className="font-semibold">{item?.name}</h2>
                        <p className="text-sm text-gray-300">
                          {item?.description?.substr(0, 10)}
                        </p>
                      </div>
                      {/* 호버시 아래위로 작동하는 부분 */}
                      <div className="w-full duration-300 h-[95%] group-hover:h-0 bg-main-dark"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

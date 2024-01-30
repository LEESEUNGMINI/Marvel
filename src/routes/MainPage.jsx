import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import ListCarosel from "../components/ListCarosel";
import { useQuery } from "react-query";
import {
  apiGetCharacters,
  apiGetComics,
  apiGetEvents,
  apiGetSeries,
} from "./api";
import TitleRotate from "../components/TitleRotate";
import LayOutColl from "../components/LayOutColl";
import { BounceLoader, PropagateLoader } from "react-spinners";
import Button from "../components/Button";
export default function MainPage() {
  let lists;
  let events;
  let series;
  let characters;

  // Comics Fetch
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  // Event Fetch
  const { data: dataEvents, isLoading: isLoadingEvents } = useQuery(
    ["getEvents"],
    apiGetEvents
  );
  if (!isLoadingEvents) {
    events = dataEvents?.data.results;
  }

  const { data: dataSeries, isLoading: isLoadingSeries } = useQuery(
    ["getSeries"],
    apiGetSeries
  );
  if (!isLoadingSeries) {
    series = dataSeries?.data.results;
  }
  // Charecters Fetch
  const { data: dataCharacters, isLoading: isLoadingCharacters } = useQuery(
    ["getCharacters", { limit: 10 }],
    apiGetCharacters
  );
  if (!isLoadingCharacters) {
    characters = dataCharacters?.data.results;
  }
  // console.log(characters);
  return (
    <>
      <Layout>
        {/*Main slide components */}
        <MainSlide />
        {/* Comics Section */}
        <TitleImageBox
          imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg"
          mainTitle="AVAILABLE NOW"
          subTitle="NEW ON MARVEL UNLIMITED"
          description="Read these plus 30,000+ digital comics for $9.99 a month!"
          btnTxt="GET MARVEL UNLIMITED"
        />
        {/* Comics Section Image */}
        {/* List Carusel */}
        <ListCarosel lists={lists} />
        {/* Event */}
        <section className="w-full flex justify-center">
          <div className="max-w-7xl w-full  grid grid-cols-[7fr_3fr] ">
            {/* 1.Left */}
            <div className="w-full ">
              {/* title */}
              <TitleRotate text="The Events" />
              {/* 이벤트 API에서 불러오기 */}
              <div className="w-full  flex">
                {/* Imgae */}
                <div className="w-full">
                  {events &&
                    events.map((item, index) => (
                      <div
                        key={index}
                        className="flex w-full h-[300px] border-b"
                      >
                        <img
                          className="w-[50%] m-4 object-cover object-center"
                          key={index}
                          src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
                          alt=""
                        />
                        {/* Text */}
                        <div className="w-[50%] space-y-6 p-4">
                          <h2 className=" text-[#A4A4A4] text-[14px]">
                            {item?.title}
                          </h2>
                          <p className=" font-bold text-[20px]">
                            {item?.description && item.description.length > 180
                              ? item.description.substr(0, 180) + "..."
                              : item.description}
                          </p>
                          <p className="text-[12px] text-[#A4A4A4]">
                            {item?.modified?.substr(0, 10)}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            {/* 2.Right */}

            <div className="w-full h-full bg-red-500 flex items-center flex-col">
              <div className="w-[80%] h-32  border-b ">
                <h2 className=" text-center font-bold text-[25px]">
                  THE HYPE BOX
                </h2>
                <p className="text-center">
                  Can’t-miss news and updates from across the Marvel Universe!
                </p>
              </div>
              {/* {series.map((item, index) => (
                <div key={index} className="border-b">
             
                  <div className="w-[50%] p-5 ">
                    <img
                      className="w-[300px] h-[50px] object-cover"
                      src={`${item?.thumbnail.path}.${item?.thumbnail.extension}`}
                      alt=""
                    />
                  </div>
           
                  <div></div>
                </div>
              ))} */}
            </div>
          </div>
        </section>
        {/* 캐릭터 */}
        <TitleImageBox
          imgUrl="https://www.pixel4k.com/wp-content/uploads/2019/07/marvel-4k-artwork_1562104971.jpg"
          mainTitle="ON SALE 1/31"
          subTitle="NEW COMICS THIS WEEK"
          description="Check out the newest Marvel comics coming out this week!"
          btnTxt="PRINT SUBSCRIPTIONS"
        />
        {/* Characters List Caurosel */}
        {isLoadingCharacters ? (
          <LayOutColl>
            <div className="w-full flex justify-center py-16">
              <PropagateLoader color="#ff0000" />
            </div>
          </LayOutColl>
        ) : (
          <ListCarosel lists={characters} />
        )}

        {/* Marvel insider */}
        <section className="w-full flex justify-center bg-black h-80 text-white">
          <div className="max-w-7xl w-full h-full flex">
            {/* 1. Left */}
            <div className="w-[40%] h-full bg-gray-300">
              <img
                className="w-full h-full object-cover"
                src="https://cdn.marvel.com/content/1x/01-mi-promo-april2020-featured-half-dsk-1140x680_4.jpg"
                alt=""
              />
            </div>
            {/* 2. Right */}
            <div className="w-[60%] h-full  flex flex-col justify-center items-center gap-8">
              <div className="flex flex-col  w-full h-full justify-center items-center gap-2 pt-12">
                <h2 className="text-[16px] text-red-500">
                  M A R V E L I N S I D E R
                </h2>
                <h3 className="text-[24px] font-bold">Watch, Earn, Redeem!</h3>
                <p>Get rewarded for doing what you already do as a fan.</p>
                <Button text="JOIN NOW" />
              </div>
              <div className="mb-3">
                <p className="text-[11px]">Terms and Conditions Apply.</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

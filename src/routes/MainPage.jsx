import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import ListCarosel from "../components/ListCarosel";
import { useQuery } from "react-query";
import { apiGetComics, apiGetEvents, apiGetSeries } from "./api";
import TitleRotate from "../components/TitleRotate";
export default function MainPage() {
  let lists;
  let events;
  let series;
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }

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
  console.log(series);

  return (
    <>
      <Layout>
        {/*Main slide components */}
        <MainSlide />
        {/* Comics Section */}
        <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        {/* Comics Section Image */}
        {/* List Carusel */}
        <ListCarosel lists={lists} />
        {/*  */}

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
      </Layout>
    </>
  );
}

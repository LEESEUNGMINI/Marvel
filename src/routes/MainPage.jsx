import Layout from "../components/Layout";
import MainSlide from "../components/MainSlide";
import TitleImageBox from "../components/TitleImageBox";
import { useQuery } from "react-query";
import { apiGetComics } from "./api";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import useMeasure from "react-use-measure";

const ListItem = ({ item, CARD_WIDTH, CARD_HEIGHT, MARGIN }) => (
  <div
    className="shrink-0"
    style={{
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      margin: MARGIN,
    }}
  >
    {/* Image Box */}
    <div className="w-full h-[280px]">
      <img
        className="w-full h-full object-cover object-center"
        src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
        alt="Comic_image"
      />
    </div>
    {/* Title */}
    <div className="">
      <h2 className="text-sm font-semibold">{item.title.substr(0, 20)}</h2>
      <h4 className="text-sm text-gray-500">{item.modified.substr(0, 10)}</h4>
    </div>
  </div>
);

export default function MainPage() {
  let lists;
  const { data, isLoading } = useQuery(["getComics"], apiGetComics);
  if (!isLoading) {
    lists = data?.data.results;
  }
  console.log(data, isLoading);
  // comic
  const CARD_WIDTH = 195;
  const CARD_HEIGHT = 340;
  const MARGIN = 8;
  const CARD_SIZE = CARD_WIDTH + MARGIN + 8;

  const BREAKPOINT = {
    sm: 640,
    lg: 1024,
  };

  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER = width > BREAKPOINT.lg ? 3 : width > BREAKPOINT.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (lists?.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) return;
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) return;
    setOffset((pv) => (pv -= CARD_SIZE));
  };
  return (
    <>
      <Layout>
        {/*Main slide components */}
        <MainSlide />
        {/* Comics Section */}
        <TitleImageBox imgUrl="https://cdn.britannica.com/62/182362-050-BD31B42D/Scarlett-Johansson-Black-Widow-Chris-Hemsworth-Thor.jpg" />
        {/* Comics Section Image */}
        <section className="w-full flex justify-center">
          <div
            ref={ref}
            className=" relative max-w-7xl w-full overflow-hidden bg-white -translate-y-12 p-2"
          >
            <motion.div
              animate={{
                x: offset,
              }}
              className="w-full flex "
            >
              {lists?.map((item, index) => (
                <ListItem
                  CARD_WIDTH={CARD_WIDTH}
                  CARD_HEIGHT={CARD_HEIGHT}
                  MARGIN={MARGIN}
                  item={item}
                  key={index}
                />
              ))}
            </motion.div>
            {/* Left Button */}
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_LEFT ? "0%" : "-100%",
              }}
              onClick={shiftLeft}
              className="absolute left-0 top-[35%] bg-slate-500/50 duration-100 p-3 pl-2 text-4xl text-white hover:pl-3"
            >
              <FaAngleLeft />
            </motion.button>
            {/* Right Button */}
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_RIGHT ? "0%" : "100%",
              }}
              onClick={shiftRight}
              className="absolute right-0 top-[35%] bg-slate-500/50 duration-100 p-3 pl-2 text-4xl text-white hover:pl-3"
            >
              <FaAngleRight />
            </motion.button>
          </div>
        </section>
      </Layout>
    </>
  );
}

import { useState } from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import NoticeDisney from "../components/NoticeDisney";
import { testimonials } from "../lib/Menus";
import { motion } from "framer-motion";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";

const Card = ({
  image,
  title,
  link,
  text,
  selected,
  setSelected,
  position,
}) => {
  const offset = position <= selected ? 0 : 100;
  return (
    <div className="w-full h-full flex justify-center">
      <motion.div
        initial={false}
        animate={{
          x: `${offset}`,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        style={{
          zIndex: position,
        }}
        onClick={() => setSelected(position)}
        className=" absolute top-0 left-0 w-full h-full flex justify-center"
      >
        <img
          className="w-full h-full object-cover -z-30"
          src={image}
          alt={title}
        />
        <div className=" absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
          <h1 className="text-4xl font-bold uppercase">Echo Comics</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit, laboriosam.
          </p>
          <Button link={link} text={text} />
        </div>
      </motion.div>
    </div>
  );
};

const SelectedBtns = ({ numTracks, setSelected, selected }) => {
  return (
    <div className="flex space-x-2">
      {numTracks.map((item, index, array) => (
        <button
          onClick={() => setSelected(index)}
          key={index}
          className="h-2 w-full bg-slate-300 relative"
        >
          {selected === index ? (
            <motion.span
              initial={{
                width: "0%",
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 5,
                ease: "easeOut",
              }}
              onAnimationComplete={() => {
                setSelected(selected === array.length - 1 ? 0 : selected + 1);
              }}
              className="  w-full h-full absolute top-0 left-0 bg-red-600 "
            ></motion.span>
          ) : (
            <span
              className="  w-full h-full absolute top-0 left-0"
              style={{ width: selected > index ? "100%" : "0%" }}
            >
              {" "}
            </span>
          )}
          <p
            className={`w-full h-16 text-left items-start pt-4 px-1 text-gray-500 ${
              selected === index && "text-red-600"
            }`}
          >
            {item.title}
          </p>
        </button>
      ))}
    </div>
  );
};

export default function MainPage() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <Layout>
        {/* Notice Disney */}
        <NoticeDisney />
        {/* Main slide Carusell */}
        <section className="w-full h-full flex  flex-col ">
          {/* 그림 영역 */}
          <div className="w-full h-[450px] bg-green-500 relative overflow-hidden">
            {testimonials.map((item, index) => (
              // 5개중의 1개 아이템
              <Card
                key={index}
                {...item}
                selected={selected}
                setSelected={setSelected}
                position={index}
              />
            ))}
          </div>
          {/* Button 영역 */}
          <div className="w-full h-[80px] flex justify-center">
            <div className="max-w-7xl h-full w-full grid flex grid-cols-4 ">
              {/* 1: 75% grid-cols-3 */}
              <div className=" col-span-3 ">
                <SelectedBtns
                  numTracks={testimonials}
                  setSelected={setSelected}
                  selected={selected}
                />
              </div>
              {/* 2: 25% grid-cols-1 */}
              <div className="flex felx w-full h-full justify-end space-x-4 items-center">
                <Facebook />
                <Insta />
                <Pinter />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

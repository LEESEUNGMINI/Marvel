import React, { useState } from "react";
import NoticeDisney from "./NoticeDisney";
import Facebook from "../assets/Facebook";
import Insta from "../assets/Insta";
import Pinter from "../assets/Pinter";
import { motion } from "framer-motion";
import { testimonials } from "../lib/Menus";
import Button from "./Button";
export default function MainSlide() {
  const Card = ({
    logoImage,
    image,
    title,
    link1,
    link2,
    btn1,
    btn2,
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
            x: `${offset}%`,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          style={{
            zIndex: position,
          }}
          onClick={() => setSelected(position)}
          className=" absolute top-0 left-0 w-full min-h-full p-8 flex flex-col items-center justify-center"
        >
          <div className=" absolute top-0 left-0 w-full h-full flex justify-center">
            {/* 백그라운드 이미지 */}
            <img
              className="w-[100%] h-[100%] object-cover object-center -z-30"
              src={image}
              alt={title}
            />
            <div className=" absolute max-w-7xl w-full h-full flex flex-col text-white space-y-4 justify-center">
              {logoImage && (
                <div className="w-[400px] h-auto">
                  <img
                    src={logoImage}
                    alt="slide_logo"
                    className="auto object-cover"
                  />
                </div>
              )}
              <h1 className="text-4xl font-bold uppercase">Echo Comics</h1>
              <p className="text-xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit, laboriosam.
              </p>
              <div className="flex space-x-4">
                {link1 && <Button link={link1} text={btn1} />}
                {link2 && <Button link={link2} text={btn2} />}
              </div>
            </div>
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
  const [selected, setSelected] = useState(0);
  return (
    <section className="w-full h-full flex  flex-col overflow-hidden ">
      <NoticeDisney />
      {/* 그림 영역 */}
      <div className=" relative w-full h-[450px] bg-green-500 ">
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
          <div className=" col-span-3 z-30 -translate-y-12 bg-white">
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
  );
}

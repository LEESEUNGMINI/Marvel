import React from "react";
import TitleRotate from "../components/TitleRotate";
import Button from "./Button";

export default function TitleImageBox({ imgUrl }) {
  return (
    <section className="w-full">
      {/* 이미지로 된 타이틀 */}
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        }}
        className="relative w-full h-[500px] flex justify-end bg-black"
      >
        {/* 오른쪽에 배경이미지 */}
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 14% 100%)",
          }}
          className="w-[55%] h-full"
        >
          <img
            className="w-full h-full object-cover object-center"
            src={imgUrl}
            alt="comics_title_img"
          />
        </div>
        {/* 절대포지션 부모요소 전체 선택 */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center ">
          <div className="max-w-7xl w-full h-full flex flex-col justify-center space-y-4 text-white">
            {/* 사선으로 된 제목 */}
            <TitleRotate />
            <h1 className="text-4xl font-bold uppercase ">
              new on marvel unlimited
            </h1>
            <p>Read these plus 30,000+ digital comics for $9.99 a month!</p>
            <Button outline="outline" text="get involved unlimited" />
          </div>
        </div>
      </div>
      {/* 코믹스 리스트 */}
    </section>
  );
}

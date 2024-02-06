import React from "react";
import { apiGetComics } from "../../routes/api";
import { useQuery } from "react-query";

const MENUS = [
  {
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    title: "zzs",
    descriptiom:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis, rem non h ",
  },
  {
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    title: "comics",
    descriptiom:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis, rem non h ",
  },
  {
    image:
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg",
    title: "comics",
    descriptiom:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facilis, rem non h",
  },
];

export default function ComicsComponent() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-8">
        <h1 className="font-bold text-3xl uppercase">latest comics</h1>
        <div className="flex space-x-4">
          {MENUS.map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-40 h-80 space-y-4 aspect-[9/16]"
            >
              <div className="w-full h-[70%]">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div>
                <h2 className="font-bold text-[20px]">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.descriptiom}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

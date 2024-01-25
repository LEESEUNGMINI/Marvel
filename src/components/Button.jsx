import React from "react";
import { Link } from "react-router-dom";

export default function Button({ link, text }) {
  return (
    <Link to={link}>
      <div>
        <button
          style={{
            clipPath:
              "polygon(8% 0, 100% 1%, 100% 83%, 93% 100%, 0 100%, 0 22%)",
          }}
          className=" uppercase px-10 py-4 font-bold duration-500 hover:bg-red-700 bg-red-600 text-white "
        >
          {text}
        </button>
      </div>
    </Link>
  );
}

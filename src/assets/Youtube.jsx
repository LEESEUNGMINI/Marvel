import React from "react";
import { CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Youtube() {
  return (
    <Link to="https://react-icons.github.io/react-icons/search/#q=twitter/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <CiYoutube size="full" />
      </div>
    </Link>
  );
}

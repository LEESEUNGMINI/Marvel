import React from "react";
import { FaTumblr } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Twitter() {
  return (
    <Link to="https://react-icons.github.io/react-icons/search/#q=twitter/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaTumblr size="full" />
      </div>
    </Link>
  );
}

import React from "react";
import { FaSnapchat } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Snapcha() {
  return (
    <Link to="https://react-icons.github.io/react-icons/search/#q=twitter/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaSnapchat size="full" />
      </div>
    </Link>
  );
}

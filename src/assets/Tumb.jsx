import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
export default function Tumb() {
  return (
    <Link to="https://react-icons.github.io/react-icons/search/#q=twitter/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaXTwitter size="full" />
      </div>
    </Link>
  );
}

import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Facebook() {
  return (
    <Link to="https://www.facebook.com/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <FaFacebookSquare size="full" />
      </div>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { CiInstagram } from "react-icons/ci";
export default function Insta() {
  return (
    <Link to="https://www.facebook.com/">
      <div className="w-6 h-6 text-gray-500 hover:text-gray-600 cursor-pointer duration-500">
        <CiInstagram size="full" />
      </div>
    </Link>
  );
}

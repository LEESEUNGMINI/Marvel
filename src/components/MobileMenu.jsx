import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MEMUS } from "./Header";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MobileMenuLink = ({ menu }) => (
  <Link to={menu.href}>
    <div className=" relative w-full flex justify-between px-4 py-2 cursor-pointer group">
      {/* Left */}
      <div>{menu.text}</div>
      {/* Right */}
      <div>
        <FaAngleRight />
      </div>
      <div className=" absolute left-0 right-0 bottom-0 origin-left h-[1px] bg-neutral-600 duration-300 scale-x-0 group-hover:scale-x-100"></div>
    </div>
  </Link>
);

export default function MobileMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <div
        onClick={() => setMobileOpen(true)}
        className=" block md:hidden text-2xl px-2 cursor-pointer"
      >
        <IoMdMenu />
      </div>
      <AnimatePresence>
        {" "}
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: "0" }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed w-full left-0 top-0 bottom-0 flex h-screen bg-black z-50"
          >
            <div className="w-full h-full p-2.5 text-2xl relative">
              <div className="w-full justify-between">
                <button onClick={() => setMobileOpen(false)}>
                  <IoClose />
                </button>
                <button className="text-lg absolute top-2 right-2">
                  <FaSearch />
                </button>
                <div>
                  {MEMUS.map((item, index) => (
                    <MobileMenuLink key={index} menu={item}></MobileMenuLink>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

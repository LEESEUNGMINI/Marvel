import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="fixed w-full left-0 top-0 bottom-0 flex h-screen bg-black z-50"></div>
    </div>
  );
}

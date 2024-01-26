import React from "react";

export default function LayOutColl({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className=" relative max-w-7xl w-full">{children}</div>
    </div>
  );
}

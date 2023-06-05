import React from "react";
import Loader from "./Loader";

const AppLoader = () => {
  return (
    <div className="fixed inset-0  bg-white/0.5 backdrop-blur-3xl flex items-center justify-center h-screen z-[1000]">
      <Loader />
    </div>
  );
};

export default AppLoader;

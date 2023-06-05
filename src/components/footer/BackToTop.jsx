import React from "react";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      className="text-center bg-slate-700 hover:bg-slate-600 duration-200 block w-full py-2 text-sm"
    >
      Back to top
    </button>
  );
};

export default BackToTop;

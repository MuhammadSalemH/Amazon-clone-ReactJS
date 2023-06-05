import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <div className="bg-slate-800 text-white font-roboto text-sm mt-auto">
      <BackToTop />
      <TopFooter />
      <BottomFooter />
    </div>
  );
};

export default Footer;

import React from "react";
import { logo } from "../../assets";
import { Language, LocationOnOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

const BottomFooter = () => {
  return (
    <div className="bg-amazon_blue py-8 flex flex-col md:flex-row items-center justify-center gap-5 text-xs">
      <Link
        to="/"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <img src={logo} alt="LOGO" width={80} />
      </Link>
      <div className="flex flex-col md:flex-row gap-5 items-center">
        <div className="border border-gray-500 flex items-center  min-w-[120px] px-2 py-1 gap-2">
          <Language />
          <span> English</span>
        </div>
        <div className="border border-gray-500 flex items-center  min-w-[120px] px-2 py-1 gap-2">
          <span className="text-base">$</span>
          <span>USD - United State Dollar</span>
        </div>
        <div className="border border-gray-500 flex items-center  min-w-[120px] px-2 py-1 gap-2">
          <LocationOnOutlined />
          <span>Egypt</span>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;

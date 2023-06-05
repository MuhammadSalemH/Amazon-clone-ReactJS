import React from "react";
import { knowUs, makeMoney, amazonPayment, helpYou } from "../../ui/constants";

const TopFooter = () => {
  return (
    <div className="border-b border-b-gray-500 bg-slate-800">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg1:grid-cols-4 gap-10 pb-10 pt-8">
        <ul>
          <h4 className="font-semibold mb-2">Make Money with Us</h4>
          {makeMoney.map((item, idx) => (
            <li
              className="text-amazon_light mb-1 text-xs cursor-pointer hover:underline"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          <h4 className="font-semibold mb-2">Let Us Help You</h4>
          {helpYou.map((item, idx) => (
            <li
              className="text-amazon_light mb-1 text-xs cursor-pointer hover:underline"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          <h4 className="font-semibold mb-2">Get to Know Us</h4>
          {knowUs.map((item, idx) => (
            <li
              className="text-amazon_light mb-1 text-xs cursor-pointer hover:underline"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul>
          <h4 className="font-semibold mb-2">Amazon Payment Products</h4>
          {amazonPayment.map((item, idx) => (
            <li
              className="text-amazon_light mb-1 text-xs cursor-pointer hover:underline"
              key={idx}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopFooter;

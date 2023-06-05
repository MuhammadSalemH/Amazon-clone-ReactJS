import { KeyboardArrowRight } from "@mui/icons-material";
import React from "react";

const DrawerList = ({ item }) => {
  return (
    <li className="border-b py-6">
      <section className="flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl font-semibold">{item.catTitle}</h3>
        <ul className="flex flex-col gap-2">
          {item.catItems.map((item) => (
            <li key={item._id} className="flex justify-between items-center">
              <p className="text-md">{item.title}</p>
              <KeyboardArrowRight />
            </li>
          ))}
        </ul>
      </section>
    </li>
  );
};

export default DrawerList;

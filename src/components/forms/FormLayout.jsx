import React from "react";
import { logoBlack } from "../../assets/index";
import { Link } from "react-router-dom";

const FormLayout = ({ children }) => {
  return (
    <div className="relative h-screen pt-4 md:pt-0 bg-zinc-50">
      <div className="container flex flex-col items-center mb-5">
        <header className="mb-4">
          <Link to="/" className="block w-32">
            <img src={logoBlack} alt="logo" />
          </Link>
        </header>
        {children}
      </div>
      <footer className=" pb-20 pt-10 text-xs font-roboto border-t-2 w-full shadow-light">
        <div className=" flex justify-center gap-5 mb-2 text-blue-500">
          <Link>Conditions of Use</Link>
          <Link>Privacy Notice</Link>
          <Link>Help</Link>
        </div>
        <p className="text-center text-slate-500">
          © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
};

export default FormLayout;

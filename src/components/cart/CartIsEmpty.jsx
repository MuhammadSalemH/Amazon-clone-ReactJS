import React from "react";
import { cart } from "../../assets";
import { Link } from "react-router-dom";

const CartIsEmpty = () => {
  return (
    <div className="w-fit mx-auto flex flex-col items-center gap-5 mdl:flex-row mdl:gap-8 lg:gap-20 md:text-sm lg:min-h-[400px] modal-open-bottom">
      <img src={cart} className="block w-96 order-2" alt="Empty cart" />
      <div className="order-1 mdl:order-2">
        <h2 className="text-xl">Your Amazon Cart is empty</h2>
        <Link
          to="/"
          className="block mb-4 text-sm text-blue-600 hover:underline"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Shop today's deals
        </Link>
        <div className="flex flex-col gap-2">
          <Link
            to="/signin"
            className="amazon-shadow block py-1 px-2 rounded-md text-sm text-center lg:text-base lg:py-0"
          >
            Sign in to your account
          </Link>
          <Link
            to="/register"
            className="bg-slate-400 rounded-md py-1 px-2 text-white text-sm text-center lg:text-base lg:py-0"
          >
            Sign up now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartIsEmpty;

import React from "react";
import { useSelector } from "react-redux";

import CartItems from "./CartItems";
import CartIsEmpty from "./CartIsEmpty";

const CartList = () => {
  const cartItem = useSelector((state) => state.cart.cartItems);
  const emptyCart = cartItem.length < 1;
  return (
    <ul className="w-full lg1:w-[60%] bg-white flex-grow p-4">
      <div className="pb-4">
        <h1 className="text-3xl">{emptyCart ? "" : "Shopping Cart"}</h1>
        {!emptyCart ? <CartItems cartProduct={cartItem} /> : <CartIsEmpty />}
      </div>
    </ul>
  );
};

export default CartList;

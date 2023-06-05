import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import CartItem from "./CartItem";

const CartItems = ({ cartProduct }) => {
  const items = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };
  return (
    <>
      <div className={`border-b ${items.length > 1 ? "pb-4" : "pb-0"}`}>
        <button
          onClick={clearCartHandler}
          className="text-sm text-teal-500 hover:text-red-600"
        >
          {items.length > 1 && "Delete all items"}
        </button>
      </div>
      {cartProduct.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default CartItems;

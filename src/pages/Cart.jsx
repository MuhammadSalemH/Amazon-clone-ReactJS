import { useSelector } from "react-redux";
import CartList from "../components/cart/CartList";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const itemsInCart = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const emptyCart = cartItems.length < 1;
  return (
    <div className="bg-gray-100 p-8 lg1:flex lg1:gap-8">
      <CartList />
      {!emptyCart && (
        <div className="bg-white mt-4 h-fit lg1:w-[30%] lg1:mt-0 p-4 flex flex-col gap-4">
          <p className="self-center price">
            Subtotal ({itemsInCart} items):{" "}
            <span className="font-semibold">${totalAmount.toFixed(2)}</span>
          </p>
          <button className="duration-100 p-2 rounded amazon-shadow">
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;

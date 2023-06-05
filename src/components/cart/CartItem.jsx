import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { DeleteOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, image, price, description, title, quantity } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const increaseProductHandelr = () => {
    dispatch(cartActions.increaseItem({ id }));
  };
  const decreaseProductHandelr = () => {
    dispatch(cartActions.decreaseItem({ id }));
  };
  const removeItemHandler = () => {
    dispatch(cartActions.removeItem({ id }));
  };
  const goToDetails = (event) => {
    console.log(event.target.nodeName);
    if (event.target.nodeName === "IMG") {
      navigate(`/${id}`);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <li
      onClick={goToDetails}
      className="flex flex-col gap-4 items-center lg1:flex-row lg1:justify-between bg-white border-t py-8 lg1:w-[90%] lg1:mx-auto lg1:h-[250px]"
    >
      <div className="w-[20%] min-w-[120px] cursor-pointer">
        <img src={image} alt={description} />
      </div>
      <div className="lg1:self-center w-full lg1:w-[60%] flex flex-col justify-between gap-4">
        <h3 className="text-lg lg1:text-xl">{title}</h3>
        <div className="justify-self-end flex justify-between">
          <div className="min-w-[140px] w-fit flex justify-between items-center">
            <p>QTY:</p>
            <button
              onClick={decreaseProductHandelr}
              className="text-red-700 font-extrabold px-2 w-1/5 t duration-200 text-xl bg-gray-100 hover:bg-gray-300"
            >
              -
            </button>
            <p className="font-semibold">{quantity}</p>
            <button
              onClick={increaseProductHandelr}
              className="text-teal-600 font-semibold px-2 w-1/5 duration-200 text-xl bg-gray-100 hover:bg-gray-300"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="text-red-600 cursor-pointer"
              onClick={removeItemHandler}
            >
              <DeleteOutline />
            </button>
            <p className="price font-semibold bg-amber-300">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

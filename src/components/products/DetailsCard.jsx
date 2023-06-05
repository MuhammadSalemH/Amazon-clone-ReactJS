import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import Favourite from "./Favourite";
import Magnifier from "react-magnifier";

const DetailsCard = ({ targetItem }) => {
  const { id, image, description, title, category, price } = targetItem;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const addedItem = {
      id,
      image,
      description,
      title,
      category,
      price,
      quantity: 1,
    };
    dispatch(cartActions.addToCart(addedItem));
  };

  return (
    <div className="flex flex-col items-center lg:flex-row lg:gap-8 lg:items-center border-b pb-8">
      <div className="w-60 lg:w-80 max-h-[26rem]">
        <Magnifier
          src={image}
          alt={title}
          zoomFactor={0.9}
          mgBorderWidth={2}
          mgWidth={230}
          mgHeight={230}
          mgShowOverflow={false}
          className="magnifier-image"
        />
      </div>
      <div className="mt-8 py-8 px-4 lg:w-1/2">
        <h1 className="mb-4 text-2xl">{title}</h1>
        <p className="">{description}</p>
        <div className="text-orange-400 my-2">
          <Favourite />
        </div>
        <p className="text-black italic mb-2 lg:hidden">Category: {category}</p>
        <div className="flex justify-between lg:flex-col lg:gap-4 lg:w-1/2">
          <button
            onClick={addToCartHandler}
            className="amazon-shadow min-w-[25%] p-1 rounded-md lg:order-2"
          >
            Add to cart
          </button>
          <p className="hidden lg:block text-black italic">
            Category: {category}
          </p>
          <h3 className="text-2xl font-semibold lg:order-1">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

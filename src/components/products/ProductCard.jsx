import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, image, description, title, category, price } = product;

  const bestSeller = id < 5;

  const addItemHandler = () => {
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

  const goToDetails = (event) => {
    if (event.target.nodeName !== "BUTTON") {
      navigate(`/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={goToDetails}
      className="w-full md:w-[300px] bg-white relative z-20 p-4 flex flex-col items-center flex-grow cursor-pointer hover:shadow-testShadow transition duration-500 border-t-4 border-t-slate-800 overflow-hidden"
    >
      {bestSeller && (
        <div className="absolute top-0 left-0">
          <p className="relative skew">Best Seller</p>
        </div>
      )}
      <span className="right-0 top-0 pb-2 italic text-gray-400 text-end w-full text-sm">
        {category}
      </span>
      <img
        className="h-56 w-56 my-2 hover:scale-110 duration-300"
        src={image}
        alt={description}
      />
      <div className="py-4 my-4 mt-2 w-full h-32 overflow-hidden text-ellipsis">
        <h2 className="text-xl mb-2">{title}</h2>
        <p className=" ">{description}</p>
      </div>
      <div className="w-full flex justify-between items-center pt-2">
        <Link
          to={`${id}`}
          className="text-slate-800 hover:underline hover:underline-offset-2 hover:text-blue-700"
        >
          See details
        </Link>
        <button
          className="duration-100 p-2 rounded amazon-shadow"
          onClick={addItemHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

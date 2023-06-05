import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { cartActions } from "../../store/cartSlice";

const SimilarCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id, image, description, title, category, price } = product;

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
    if (event.target.nodeName !== "BUTTON") navigate(`/${id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <li
      onClick={goToDetails}
      className="border w-full md:w-1/2 mdl:w-1/3 flex flex-col items-center justify-center cursor-pointer p-4 mdl:max-w-[250px] md:flex-nowrap"
    >
      <img className="sm:w-1/2 my-2 block" src={image} alt={description} />
      <div className="px-2 h-1/3 flex flex-col justify-end gap-2 w-full">
        <h2 className="text-base h-[70px] overflow-hidden">{title}</h2>
        <div className="flex justify-between items-end w-full h-1/2 text-xs mdl:text-sm">
          <Link
            to={`/${id}`}
            className="text-slate-800 hover:underline hover:underline-offset-2"
          >
            See details
          </Link>
          <button
            className="duration-100 rounded amazon-shadow px-1 py-[0.9px]"
            onClick={addItemHandler}
          >
            Add to cart
          </button>
        </div>
      </div>
    </li>
  );
};

export default SimilarCard;

import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="bg-white text-gray-500 px-8 pt-28 py-32">
      <div className="flex flex-col items-center justify-center text-center gap-4 modal-open-bottom">
        <h1 className="text-4xl uppercase">sorry</h1>
        <h2 className="text-lg sm:text-2xl ">We couldn't find that page!</h2>
        <h3 className="text-5xl font-bold text-transparent bg-gradient-to-br from-amber-400 via-amber-600 to-amber-600 bg-clip-text">
          404
        </h3>
        <Link
          to="/"
          className="text-sm sm:text-base text-amber-600 hover:underline"
        >
          Go to Amazon's home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

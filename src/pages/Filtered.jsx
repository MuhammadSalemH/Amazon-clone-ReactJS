import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FilteredItem = ({ item }) => {
  const { id, image, description, title, price } = item;
  return (
    <Link
      to={`/${id}`}
      className="w-full flex flex-col items-center md:w-1/2 lg:w-1/3 lg1:w-1/4 p-4 justify-center"
    >
      <div className="w-[20%] min-w-[120px] max-w-[120px] min-h-[120px]">
        <img src={image} alt={description} />
      </div>
      <div className="text-center">
        <h3 className="text-lg lg1:text-xl">{title}</h3>
        <p className="font-semibold">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

const Filtered = () => {
  const filterationResults = useSelector((state) => state.filter.items);
  console.log(filterationResults);
  return (
    <div className="px-8 py-4">
      <h1 className="text-3xl pb-4 border-b">Results:</h1>
      <ul className="flex flex-wrap my-8">
        {filterationResults.map((item) => (
          <FilteredItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default Filtered;

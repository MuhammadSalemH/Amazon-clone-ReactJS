import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data } = useLoaderData();
  return (
    <div className="px-8  md:-mt-19 lg1:-mt-[6.5rem] xl:-mt-32 bg-gray-100 flex flex-wrap gap-5">
      {data.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;

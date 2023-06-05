import { useLoaderData, useParams } from "react-router-dom";

import DetailsCard from "../components/products/DetailsCard";
import SimilarProducts from "../components/products/SimilarProducts";
import NotFound from "./NotFound";

const ProductDetails = () => {
  const { data } = useLoaderData();
  const params = useParams();

  const targetItem = data.find((item) => String(item.id) === params.productId);

  if (!targetItem) return <NotFound />;

  const similarItems = data.filter(
    (item) => item.category === targetItem.category && item.id !== targetItem.id
  );

  return (
    <div className="px-8 py-4">
      <DetailsCard targetItem={targetItem} />
      <SimilarProducts similarItems={similarItems} />
    </div>
  );
};

export default ProductDetails;

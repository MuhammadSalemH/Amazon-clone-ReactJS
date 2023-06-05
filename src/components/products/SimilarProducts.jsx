import SimilarCard from "./SimilarCard";

const SimilarProducts = ({ similarItems }) => {
  return (
    <div className="py-8">
      <h3 className=" text-lg font-semibold mb-8 pb-4">People also bought</h3>
      <ul className="flex flex-wrap justify-center md:h-[300px] md:justify-start overflow-auto">
        {similarItems.map((product) => (
          <SimilarCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default SimilarProducts;

import CarouselSlider from "../components/CarouselSlider";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <section className="relative mb-14">
      <CarouselSlider />
      <Products />
    </section>
  );
};

export default Home;

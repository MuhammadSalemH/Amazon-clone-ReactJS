import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="z-40 max-h-[99px]">
      <TopHeader />
      <Navbar />
    </header>
  );
};

export default Header;

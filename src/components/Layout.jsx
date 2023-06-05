import { useLocation, Outlet } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
  const location = useLocation();
  const showFullPage =
    location.pathname !== "/register" &&
    location.pathname !== "/signin" &&
    location.pathname !== "/alert";

  return (
    <>
      {showFullPage && <Header />}
      <Outlet />
      {showFullPage && <Footer />}
    </>
  );
};

export default Layout;

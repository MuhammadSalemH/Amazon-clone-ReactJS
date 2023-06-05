import { useLocation, Outlet, useNavigation } from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import AppLoader from "../ui/AppLoader";

const Layout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const showFullPage =
    location.pathname !== "/register" &&
    location.pathname !== "/signin" &&
    location.pathname !== "/alert";

  console.log(navigation.state);
  return (
    <>
      {navigation.state === "loading" && <AppLoader />}
      {showFullPage && <Header />}
      <Outlet />
      {showFullPage && <Footer />}
    </>
  );
};

export default Layout;

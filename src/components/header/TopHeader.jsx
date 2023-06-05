import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  LocationOnOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search";
import { authActions } from "../../store/authSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const TopHeader = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const user = useSelector((state) => state.auth.user);
  const userLoggedIn = useSelector((state) => state.auth.userIsLoggedin);
  const dispatch = useDispatch();
  const itemsInCart = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const logoutHandler = async () => {
    await signOut(auth);
    dispatch(authActions.signOut());
    navigate("/signin");
  };

  const navigateHandler = (event) => {
    if (userLoggedIn) event.preventDefault();
    else navigate("/signin");
  };

  return (
    <div className="px-4 py-4 bg-amazon_blue text-white flex items-center justify-between gap-4 max-h-[70px]">
      {/* Start logo */}
      <Link to="/">
        <div className="hover-box p-1 pb-0 w-fit">
          <img src={logo} alt="logo" className="w-24 min-w-[70px]" />
        </div>
      </Link>
      {/* End logo */}
      {/* Start location box */}
      <div className="text-sm pointer hover-box cursor-pointer font-semibold hidden lg:flex">
        <LocationOnOutlined />
        <p>
          <span className="text-xs text-amazon_light">Deliveed to</span>
          <br />
          Egypt
        </p>
      </div>
      {/* End location box */}
      {/* Start search  */}
      <Search />
      {/* End search  */}
      {/* Start login box */}
      <button onClick={navigateHandler}>
        <div className="text-sm pointer hover-box cursor-pointer font-semibold text-center">
          <p>
            <span className="text-amazon_light text-xs">Hello,</span>
            <br />
            {userLoggedIn ? user.displayName : "Signin"}
          </p>
        </div>
      </button>
      {/* End login box */}
      {/* Start Orders box */}
      <Link to="cart">
        <div className="text-xs pointer hover-box cursor-pointer font-semibold flex">
          <ShoppingCartOutlined sx={{ fontSize: "25px" }} />
          <p className="text-center">
            <span className="text-amazon_yellow_hover">{itemsInCart}</span>
            <br />
            Cart
          </p>
        </div>
      </Link>
      {/* End Orders box */}
      {/* Start logout box */}
      {userLoggedIn && (
        <button
          onClick={logoutHandler}
          className="text-xs pointer hover-box cursor-pointer font-semibold flex"
        >
          <LogoutOutlined sx={{ fontSize: "25px" }} />
        </button>
      )}
      {/* End logout box */}
    </div>
  );
};

export default TopHeader;

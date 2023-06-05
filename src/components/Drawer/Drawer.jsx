import ReactDoM from "react-dom";
import { Link } from "react-router-dom";
import DrawerList from "./DrawerList";
import { DrawerListItems } from "../../ui/constants";
import { Close, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../store/drawerSlice";
import Overlay from "../../ui/Overlay";
import { Transition } from "react-transition-group";

const TemporaryDrawer = ({ show }) => {
  const userLoggedIn = useSelector((state) => state.auth.userIsLoggedin);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const closeDrawerHandler = () => {
    dispatch(drawerActions.hideDrawer());
  };

  return (
    <>
      <Transition in={show} mountOnEnter unmountOnExit timeout={400}>
        {(state) => (
          <>
            {/* Add overlay componets */}
            <Overlay onClick={closeDrawerHandler} index="40" />
            {/* Start Drawer */}
            <div
              className={`z-50 h-screen bg-white w-screen xs:w-56 sm:w-80 md:w-96 fixed top-0 left-0 ${
                state === "entering"
                  ? "drawer-open"
                  : state === "exiting"
                  ? "drawer-close"
                  : null
              }`}
            >
              <header className="bg-slate-800 text-white py-2 px-8">
                <p className="flex items-center gap-3 text-lg font-semibold">
                  <span className="bg-white w-10 h-10 rounded-3xl flex items-center justify-center">
                    {userLoggedIn ? (
                      <img
                        src={user.photoURL}
                        alt="Avatar"
                        className="w-10 h-10 rounded-3xl"
                      />
                    ) : (
                      <Person className="text-slate-800" />
                    )}
                  </span>
                  <Link to="/signin">
                    Hello, {userLoggedIn ? user.displayName : "sign in"}
                  </Link>
                </p>
              </header>
              <ul className="px-10 font-roboto">
                {DrawerListItems.map((item) => (
                  <DrawerList item={item} key={item._id} />
                ))}
              </ul>
              <div className="absolute top-0 -right-[40px] w-10 h-10  flex items-center justify-center cursor-pointer text-white hover:bg-red-700 duration-100">
                <button onClick={closeDrawerHandler}>
                  <Close className="text-2x" sx={{ fontSize: "32px" }} />
                </button>
              </div>
            </div>
          </>
        )}
      </Transition>
      {/* End Drawer */}
    </>
  );
};

const Drawer = ({ show }) => {
  return (
    <>
      {ReactDoM.createPortal(
        <TemporaryDrawer show={show} />,
        document.getElementById("drawer-root")
      )}
    </>
  );
};

export default Drawer;

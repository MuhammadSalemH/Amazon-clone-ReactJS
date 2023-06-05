import { Menu } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { drawerActions } from "../../store/drawerSlice";
import { navItem } from "../../ui/constants";
import Drawer from "../Drawer/Drawer";

const Navbar = () => {
  const show = useSelector((state) => state.drawer.show);
  const dispatch = useDispatch();

  const showDrawerHandler = () => {
    dispatch(drawerActions.showDrawer());
  };

  return (
    <>
      <nav className="px-4 py-2 bg-slate-800 text-white max-h-[29px] flex items-center text-xs mdl:text-sm justify-between">
        <ul className="flex items-center gap-5">
          <li className="hover-nav">
            <button onClick={showDrawerHandler}>
              <Menu /> All
            </button>
          </li>
          {navItem.map((item) => (
            <li className="hidden mdl:block hover-nav" key={item._id}>
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
      {/* {show && <Drawer />} */}
      <Drawer show={show} />
    </>
  );
};

export default Navbar;

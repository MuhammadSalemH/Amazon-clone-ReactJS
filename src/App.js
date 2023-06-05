import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { fetchProducts } from "./api/fetchProduct";

import { Home, Login, Register, Cart, ProductDetails, Filtered } from "./pages";
import Layout from "./components/Layout";
import AlertPage from "./components/forms/AlertPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={fetchProducts} />
      <Route path="signin" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="alert" element={<AlertPage />} />
      <Route path="filtered" element={<Filtered />} />
      <Route
        path=":productId"
        element={<ProductDetails />}
        loader={fetchProducts}
      />
    </Route>
  )
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(authActions.signIn(JSON.parse(localStorage.getItem("user"))));
    }
  }, [dispatch]);
  return <RouterProvider router={router} />;
};

export default App;

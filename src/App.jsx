import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          element: <PlaceOrder />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

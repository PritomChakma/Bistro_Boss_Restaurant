import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import OderFood from "../Pages/OderFood/OderFood";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element:<Menu></Menu>
      },
      {
        path: "/oder/:category",
        element:<OderFood></OderFood>
      },
    ],
  },
]);

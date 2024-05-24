import About from "../Pages/About";
import Homepage from "../Pages/Homepage";
import ProductList from "../Pages/ProductList";
import MainLayout from "../layouts/MainLayout";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "homepage",
        element: <Homepage />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];
export default mainRoutes;

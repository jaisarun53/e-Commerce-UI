import About from "../Pages/About";
import AddProduct from "../Pages/AddProduct";
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
      {
        path: "add-product",
        element: <AddProduct />,
      },
    ],
  },
];
export default mainRoutes;

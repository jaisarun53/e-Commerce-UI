import Homepage from "../Pages/Homepage";
import MainLayout from "../layouts/MainLayout";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    Children: [
      {
        path: "homepage",
        element: <Homepage />,
      },
    ],
  },
];
export default mainRoutes;

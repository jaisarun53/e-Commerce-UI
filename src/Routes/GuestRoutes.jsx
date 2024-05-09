import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MinimumLayout from "../layouts/MinimumLayout";

const guestRoutes = [
  {
    path: "/",
    element: <MinimumLayout />,
    Children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
];
export default guestRoutes;

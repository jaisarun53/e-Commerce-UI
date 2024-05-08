import Login from "../Pages/Login";
import Register from "../Pages/Register";

const guestRoutes = [
  {
    path: "/",
    element: <div>Hello world</div>,
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
export default guestRoutes;

import { useRoutes } from "react-router-dom";

// Layouts
import RootLayout from "../layout/RootLayout";

// Pages
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminLogin from "../pages/AdminLogin";
import UserManagement from "../pages/UserManagement";

// Routes
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import PublicRoute from "./PublicRoute";
import Users from "../pages/Users";

const Router = () => {
  const routes = [
    { path: "/login", element: <PublicRoute><Login /></PublicRoute> },
    {
        path: "/admin",
        children: [
          { path: "", element: <PublicRoute><AdminLogin /></PublicRoute> },
          { path: "dashboard", element: <AdminRoute><Dashboard /></AdminRoute> },
          { path: "users", element: <AdminRoute><Users /></AdminRoute> },
          { path: "add-user", element: <AdminRoute><UserManagement /></AdminRoute> },
          { path: "edit-user/:id", element: <AdminRoute><UserManagement /></AdminRoute> }
        ]
    },
    {
      path: "/",
      element: <PrivateRoute><RootLayout /></PrivateRoute>,
      children: [
        { path: "", element: <PrivateRoute><Home /></PrivateRoute> },
        { path: "about", element: <PrivateRoute><About /></PrivateRoute> }
      ]
    }
  ];
  let element = useRoutes(routes);

  return element;
};

export default Router;
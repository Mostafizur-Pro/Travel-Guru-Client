import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import ServiceDetails from "./../Pages/Home/ServiceDetails/ServiceDetails";
import ServiceAll from "../Pages/Home/ServiceAll/ServiceAll";

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/servicedetails",
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/servicesall",
        element: <ServiceAll></ServiceAll>,
      },
    ],
  },
  {
    path: "*",
    element: <div> this page is : 404</div>,
  },
]);

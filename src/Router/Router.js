import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "./../Pages/Login/Login";
import Register from "./../Pages/Register/Register";
import ServiceDetails from "./../Pages/Home/ServiceDetails/ServiceDetails";
import ServiceAll from "../Pages/Home/ServiceAll/ServiceAll";
import PrivateRouter from "./PrivateRouter";
import Review from "../Pages/Review/Review/Review";
import Comments from "../Pages/Home/ServiceDetails/Comments";

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
        path: "/servicedetails/:id",
        element: (
          <PrivateRouter>
            <ServiceDetails></ServiceDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicesall/${params.id}`),
      },
      {
        path: "/servicedetails/:id",
        element: <Comments></Comments>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servicesall/${params.id}`),
      },
      {
        path: "/servicesall",
        element: <ServiceAll></ServiceAll>,
      },
      {
        path: "/review",
        element: (
          <PrivateRouter>
            <Review></Review>
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div> this page is : 404</div>,
  },
]);

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
import Profile from "./../Pages/Profile/Profile";
import AddService from "../Pages/AddService/AddService";
import RevgiewEdit from "../Pages/Review/Review/ReviewEdit.js/RevgiewEdit";

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
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/servicesall/${params.id}`
          ),
      },
      {
        path: "/servicedetails/:id",
        element: <Comments></Comments>,
        loader: ({ params }) =>
          fetch(
            `https://b6a11-service-review-server-side-mostafizur-pro.vercel.app/servicesall/${params.id}`
          ),
      },
      {
        path: "/servicesall",
        element: <ServiceAll></ServiceAll>,
      },
      {
        path: "/reviewEdit",
        element: <RevgiewEdit></RevgiewEdit>,
      },
      {
        path: "/review",
        element: (
          <PrivateRouter>
            <Review></Review>
          </PrivateRouter>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRouter>
            <Profile></Profile>
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

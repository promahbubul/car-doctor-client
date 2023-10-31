import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/Home/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import Signup from "../pages/Signup/Signup";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/book/:id",
        element: (
          <PrivetRoute>
            <BookService></BookService>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/checkout/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default routes;

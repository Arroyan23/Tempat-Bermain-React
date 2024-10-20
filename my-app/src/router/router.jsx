// halaman untuk mengatur router
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/hompages";
import RootLayout from "../layouts/layout";
import MoviePage from "../pages/movie/movie";
import Weather from "../pages/weather";
import Favian from "../pages/kasusfavian/favian";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/todo",
        element: <HomePage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
      {
        path: "/kasusfavian",
        element: <Favian />,
      },
    ],
  },
]);

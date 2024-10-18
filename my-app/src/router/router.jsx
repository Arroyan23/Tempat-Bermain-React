// halaman untuk mengatur router
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/hompages";
import RootLayout from "../layouts/layout";
import MoviePage from "../pages/movie/movie";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/movie",
        element: <MoviePage />,
      },
    ],
  },
]);

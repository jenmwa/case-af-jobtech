import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Occupation } from "./Occupation";
import Main from "./Main";
import { About } from "./About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Main></Main>,
        index: true,
      },
      {
        path: "/occupation/:id",
        element: <Occupation></Occupation>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Occupation } from "./Occupation";
import Main from "./Main";
import { About } from "./About";
import Education from "./Education";

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
        path: "/yrke/:id",
        element: <Occupation></Occupation>,
      },
      {
        path: "/om",
        element: <About></About>,
      },
      {
        path:"/utbildning",
        element: <Education></Education>,
      }
    ],
  },
]);

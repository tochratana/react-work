import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./partials/layout/Layout";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Features from "./pages/Features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/features",
        element: <Features />,
      },
    ],
  },
]);
export default router;

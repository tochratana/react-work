import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./partials/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // element: <h1 className="text-red-200 bg-black">Hello</h1>,
  },
]);
export default router;

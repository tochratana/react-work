import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDom from "react-dom/client";
import React from "react";
import "./index.css";
import router from "./App";
import { RouterProvider } from "react-router-dom";

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

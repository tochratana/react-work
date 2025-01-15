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
import HowItWork from "./pages/HowItWork";
import Career from "./pages/Career";
import CareerSingle from "./pages/CareerSingle";
import IntergrationSingle from "./pages/IntergrationSingle";
import Pricing from "./pages/Pricing";
import Intergration from "./pages/Intergration";
import ChangeLogs from "./pages/ChangeLogs";
import TermCondition from "./pages/TermCondition";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

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
      {
        path: "/how-it-work",
        element: <HowItWork />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/career-single",
        element: <CareerSingle />,
      },
      {
        path: "/page/intergration",
        element: <Intergration />,
      },
      {
        path: "/page/intergration-single",
        element: <IntergrationSingle />,
      },
      {
        path: "/page/pricing",
        element: <Pricing />,
      },
      {
        path: "/page/changelogs",
        element: <ChangeLogs />,
      },
      {
        path: "/page/term-condition",
        element: <TermCondition />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);
export default router;

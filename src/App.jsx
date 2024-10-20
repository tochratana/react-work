import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Nav } from "./components/Home/nav";
export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
    </>
  );
};

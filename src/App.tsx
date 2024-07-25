import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./layout";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";

const routes = [
  {
    path: "",
    element: <Home />,
    layout: "layout",
  },
  {
    path: "/about",
    element: <About />,
    layout: "layout",
  },
  {
    path: "/shop",
    element: <Shop />,
    layout: "layout",
  },
];

const App = () => {
  return (
    <Routes>
      {routes?.map((route, index) => (
        <Route key={index} path={route.path} element={route?.layout === "layout" ? <Layout>{route.element}</Layout> : route.element} />
      ))}
    </Routes>
  );
};

export default App;
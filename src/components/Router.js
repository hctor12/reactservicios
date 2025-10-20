import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import TablaMultiplicar from "./TablaMultiplicar";
import Collatz from "./Collatz";

const Router = () => {
  const TablaMultiplicarElement = () => {
    let { miNumero } = useParams();
    return <TablaMultiplicar numero={miNumero} />;
  };

  const CollatzElement = () => {
    let { miNumero } = useParams();
    return <Collatz numero={miNumero} />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/tabla/:miNumero"
          element={<TablaMultiplicarElement />}
        ></Route>
        <Route path="/collatz/:miNumero" element={<CollatzElement />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

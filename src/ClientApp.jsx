import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";

const ClientApp = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default ClientApp;

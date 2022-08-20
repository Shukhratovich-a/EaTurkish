import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Client/Home/Home";
import Menu from "./Pages/Client/Menu/Menu";
import News from "./Pages/Client/News/News";
import About from "./Pages/Client/About/About";
import Contact from "./Pages/Client/Contact/Contact";
import Login from "./Pages/Client/Login/Login";

const ClientApp = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/news"} element={<News />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default ClientApp;

import { React, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer/Footer";
import Navbar from "../UI/Navbar/Navbar";
import LoginPopup from "../UI/LoginPopup/LoginPopup";

const AppLayout = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default AppLayout;

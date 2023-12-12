import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavDrawer from "../NavDrawer/NavDrawer";
import './Root.css'

const Root = () => {
  return (
    <div>
      <div className="grid grid-cols-7">
        <div className="col-span-1 hidden-sm">
          <Navbar />
        </div>

        <div className="col-span-6">
          <div className="nav-drawer">

          <NavDrawer/>
          </div>
          <Outlet/>
          <Footer/>
        
        </div>
      </div>

    </div>
  );
};

export default Root;

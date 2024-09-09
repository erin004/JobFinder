import React from "react";
import Footer from "../component/Footer";
import NavbarAdmin from "../component/NavbarAdmin";

const LayoutDashboard = (props) => {
  return (
    <>
      <NavbarAdmin />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutDashboard;

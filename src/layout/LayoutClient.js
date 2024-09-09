import React from "react";
import Navbar from "../component/NavbarClient";
import Footer from "../component/Footer";

const LayoutClient = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default LayoutClient;

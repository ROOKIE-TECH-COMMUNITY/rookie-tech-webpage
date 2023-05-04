import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children, backgroundColor, buttonType }) {
  return (
    <>
      <Header backgroundColor={backgroundColor} buttonType={buttonType} />
        {children}
      <Footer/>
    </>
  );
}

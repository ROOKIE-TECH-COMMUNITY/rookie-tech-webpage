import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageLoad from "../context/PageLoading";

export default function Layout({ children, backgroundColor, buttonType }) {
  return (
    <PageLoad>
      <Header backgroundColor={backgroundColor} buttonType={buttonType} />
        {children}
      <Footer/>
    </PageLoad>
  );
}

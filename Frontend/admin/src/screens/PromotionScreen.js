import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import MainPromotions from "../components/Promotion/MainPromotions";

const ProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <MainPromotions />
      </main>
    </>
  );
};

export default ProductScreen;

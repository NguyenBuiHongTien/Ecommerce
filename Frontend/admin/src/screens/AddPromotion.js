import React from "react";
import Sidebar from "./../components/sidebar";
import Header from "./../components/Header";
import AddPromotion from "./../components/Promotion/AddPromotion";

const ProductScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <AddPromotion />
      </main>
    </>
  );
};

export default ProductScreen;

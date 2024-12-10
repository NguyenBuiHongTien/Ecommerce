import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/Header";
import PromotionDetail from "../components/Promotion/PromotionDetail";

const ProductScreen = () => {
  const promotionId = "somePromotionId";

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <PromotionDetail promotionId={promotionId} />
      </main>
    </>
  );
};

export default ProductScreen;

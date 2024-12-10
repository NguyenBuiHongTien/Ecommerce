import React from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import Footer from "./../components/Footer";
import Taskbar from "./../components/Taskbar";

const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <Header />
      <Taskbar />
      <ShopSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
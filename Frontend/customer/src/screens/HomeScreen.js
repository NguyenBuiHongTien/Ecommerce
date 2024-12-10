import React from "react";
import Header from "../components/Header";
import ShopHome from "../components/homeComponents/ShopHome";
import ContactInfo from "../components/homeComponents/ContactInfo";
import CalltoActionSection from "../components/homeComponents/CalltoActionSection";
import Footer from "../components/Footer";
import Review from "../components/homeComponents/Review";
import Taskbar from "../components/Taskbar";


const HomeScreen = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div>
        <Header />
        <Taskbar />
        <Review />
        <ShopHome />
        <CalltoActionSection />
        <ContactInfo />
        <Footer />
    </div>
    </>
  );
};

export default HomeScreen;

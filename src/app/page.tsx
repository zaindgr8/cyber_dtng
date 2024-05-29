import React from "react";
import Navbar from "./componts/Navbar";
import Hero from "./componts/Hero";
import Hero2 from "./componts/Hero2";
import Blog from "./componts/Blog";
import Hero3 from "./componts/Hero3";
import Footer from "./componts/Footer";
import Testomonels from "./componts/Testomonels";
import Hero1 from "./componts/Hero1";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero1/>
      <Hero2 />
      <Blog />
      <Hero3 />
      {/* <Testomonels /> */}
      <Footer />
    </div>
  );
};

export default page;

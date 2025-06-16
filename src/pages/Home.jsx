import Header from "../components/header";
import Banner from "../components/banner";
import Card from "../components/card";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

import React from "react";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Card />
      <Testimonials />
      <Footer />
    </div>
  );
}

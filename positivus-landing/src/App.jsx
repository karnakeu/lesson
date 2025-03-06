import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import CaseStudies from "./components/CaseStudies";
import Working from "./components/Working";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Working />
      <Team />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;

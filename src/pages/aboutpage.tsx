import React from "react";
import Navbar from "../components/nav";
import About from "../components/about";
import Footer from "../components/footer";

const AboutPage: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
};

export default AboutPage;
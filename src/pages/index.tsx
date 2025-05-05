import React from "react";
import Navbar from "../components/nav";
import Intro from "../components/intro";
import Footer from "../components/footer";

const Home: React.FC = () => {
  return (
    <main className="container">
      <Navbar />
      <Intro />
      <Footer />
    </main>
  );
};

export default Home;
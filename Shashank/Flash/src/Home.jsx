import React from "react";
import PageNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ourexpertise from "./components/Ourexpertise";
import Partnership from "./components/Partnership";

const Home = () => {
  return (
    <>
      <PageNavbar />

      <Hero />

      <Ourexpertise />

      <Partnership />
    </>
  );
};

export default Home;

import React from 'react';
import Footer from "../compnents/Footer";
import Navbar from "../compnents/Navbar";
import Card from "../compnents/Card";
import Carousal from "../compnents/Carousals";

const Home = () => {
  return (
    <>
        <Navbar/>
        <Carousal/>
        <Card/>
        <Footer/>
    </>
  )
}

export default Home;

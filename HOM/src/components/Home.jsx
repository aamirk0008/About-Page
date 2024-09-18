import React from "react";
import Front1 from "./Front1";
import Front2 from "./Front2";
import Front3 from "./Front3";
import Front4 from "./Front4";
import Social from "./Social";
import HorizontalScroll from "./HorizontalScroll";


const Home = () => {
  return (
    <>
      
      <div className='h-[550px] text-white flex justify-center items-center bg-[url("https://growify.in/cdn/shop/files/about_us_hero.jpg?v=1716293561&width=1800")]'>
        <h1 className="text-6xl">We grow when you grow</h1>
      </div>
      
      <HorizontalScroll/>

      <Social/>
    </>
  );
};

export default Home;

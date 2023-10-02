
import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from "react";
import img from './image.jpg'
import About from './components/About';
import Gallery from './components/Gallery';
import Features from './components/Features';
import Footer from './components/Footer';
import Cont from './components/Cont';
function App() {

  const [bg, setBg] = useState("black");
  const [textcolor, settextcolor] = useState("green");
  const [itext, setitext] = useState("white");

  const scroll = () => {
    let scrollvalue = window.scrollY;
    if (scrollvalue < 40) {
      setBg("black");
      settextcolor("green");
      setitext("white");
    } else if (scrollvalue > 40) {
      setBg("white");
      settextcolor("black");
      setitext("black");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  return (
    <>
    <section className='h-screen w-full relative  bg-gradient-to-r from-black to-gray-600'>
    <img src={img} className='h-full w-full object-cover absolute mix-blend-overlay' />
    <Navbar textcolor={textcolor} scroll={scroll}/>
    <h1 className='md:text-9xl text-8xl text-center bold mt-32 font-mono text-white'>CLASS-1</h1>
    <h1 className='text-5xl text-center bold mt-4 font-mono text-white'>UNISEX SALON</h1>
    </section>

    <section>

    <About/>

    </section>

    <section>

      <Gallery/>

    </section>


    <section>
      <Features/>
    </section>
    <section>
      <Footer/>
    </section>



    <section>
      <Cont/>
    </section>
    </>
  );
}

export default App;

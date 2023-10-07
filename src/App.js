
import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from "react";
import img from './image.jpg'
import About from './components/About';
import Gallery from './components/Gallery';

import Footer from './components/Footer';
import Our2 from './components/Our2';
import Contact from './components/Contact';


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
     <section className='h-screen relative bg-gradient-to-t from-slate-900 ' id='Home'>
    <img src={img} className='h-full w-full object-cover absolute mix-blend-overlay ' />
    <Navbar textcolor={textcolor} scroll={scroll}/>
    <h1 className='md:text-9xl text-8xl text-center bold mt-32 font-mono text-white  '>CLASS-1</h1>
    <h1 className='text-5xl text-center bold mt-4 font-mono text-white'>UNISEX SALON</h1>
    <h1 className='text-xl text-center bold mt-4 font-mono text-white'>UNISEX SALON</h1>
    </section>

    <section id='About'>

    <About/>

    </section>

   
    

    <section id='Service'>
      <Our2/>
    </section>






    <section id='gallery'>
      <Gallery/>
    </section>

    <section id='gallery'>
      <Contact/>
    </section>


 


    <section>
      <Footer/>
    </section>

    


    {/* <section>
      <Cont/>
    </section> */}
    </>
  );
}

export default App;

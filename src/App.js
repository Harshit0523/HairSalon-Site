
import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from "react";
// import Link from 'next/Link'
// import img from './image.jpg'
// import img from './image.jpg'
import img from './2.webp'
import About from './components/About';
import Gallery from './components/Gallery';

import Footer from './components/Footer';
import Our2 from './components/Our2';
import Contact from './components/Contact';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { ImWhatsapp } from 'react-icons/im';


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
     <section className='h-screen relative bg-gradient-to-r from-black to-slate-800  ' id='Home'>
    <img src={img} className='h-full w-full object-cover absolute mix-blend-soft-light ' />
    <Navbar textcolor={textcolor} scroll={scroll}/>
    <h1 className='md:text-9xl text-8xl text-center bold mt-32 font-sans  text-white '><i><b className='text-red-500 text-6xl md:text-9xl '>CLASS-1</b></i></h1>
    <h1 className='text-2xl md:text-5xl text-center bold mt-4 font-mono text-white'>UNISEX SALON</h1>



    <div className='text-center  justify-center text-white bold flex py-6 text-2xl  '>

        <div className='m-1 text-pink-600 cursor-pointer '> <a href="https://wa.me/9424741225"> <AiOutlineInstagram className='cursor-pointer'/> </a> </div>
        <div  className='m-1 text-blue-600 cursor-pointer'> <BiLogoFacebook className='cursor-pointer'/> </div>
        <div  className='m-1 text-green-500 cursor-pointer'> <ImWhatsapp className='cursor-pointer'/></div>
        
           


  
 </div>
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

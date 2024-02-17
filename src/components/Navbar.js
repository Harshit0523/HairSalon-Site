import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLessThan } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../images/clogo.png'

const Navbar = () => {
  const toggleCart = () => {
    console.log("hello");
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };
  const ref = useRef();

  const scroll = () => {
    let scrollvalue = window.scrollY;
    if (scrollvalue < 40) {
    } else if (scrollvalue > 40) {
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scroll);
  });
  return (
    <>
      <header class="text-gray-600 body-font sticky z-50">
        <div class="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center sticky">
          <div className="mid  text-2xl text-white md:hidden ">
            <AiOutlineMenu onClick={toggleCart} />
          </div>
          <div class="text-bold text-white">
            <img src={logo} className="h-28 w-28"/>
          </div>

          <div
            ref={ref}
            className={` md:hidden w-full h-[100vh] sideCart absolute z-10 bg-black  px-8 py-10 top-0 right-0 transform transition-transform -translate-x-full ease-in duration-500 `}
          >
            <span
              onClick={toggleCart}
              className="absolute top-10 left-10 cursor-pointer text-2xl text-white"
            >
              <FaLessThan />
            </span>


    `

            <div className="text-white flex flex-col items-center h-80 mt-32 justify-between">
              <div a className="text-4xl">
                {" "}
                <Link onClick={toggleCart}
                  activeClass="active"
                  to="section1"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >HOME</Link>
                
              </div>
              <div className="text-4xl">
                {" "}
                <Link
                onClick={toggleCart}
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={15000}
                >ABOUT</Link>
                
              </div>
              <div className="text-4xl">
                {" "}
                <Link
                onClick={toggleCart}
                  activeClass="active"
                  to="SERVICES"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={15000}
                >SERVICES</Link>
                
              </div>
              <div className="text-4xl">
                {" "}
                <Link
                onClick={toggleCart}
                  activeClass="active"
                  to="GALLERY"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={15000}
                >GALLERY</Link>
                
              </div>
              
            </div>
          </div>

          <nav class="md:ml-auto text-white md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:block">
            <a class="mr-5 hover:text-gray-900">
              <a href="#Home">HOME</a>
            </a>
            <a class="mr-5 hover:text-gray-900">
            <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="About"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >ABOUT</Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
            <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="Service"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >SERVICE
                </Link>
            </a>
            <a class="mr-5 hover:text-gray-900">
            <Link
                  className="cursor-pointer"
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >GALLERY</Link>
            </a>
          </nav>
          <button class=" items-center hidden md:block border-0 py-1 bg-green-600 px-3 focus:outline-none hover:bg-gray-200 rounded text-black text-base mt-4 md:mt-0">
          <a href="https://wa.me/9424741225">
            Contact Us
            </a>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaLessThan } from "react-icons/fa";
import { useRef } from "react";
const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("-translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("-translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("-translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <header class="text-gray-600 body-font ">
        <div class="container mx-auto flex flex-wrap p-5 justify-between flex-row items-center">
          
            <div className="mid  text-2xl text-white md:hidden ">
              <AiOutlineMenu onClick={toggleCart} />
            </div>
            <div class="ml-3 text-xl text-bold text-white">CLASS-ONE</div>
          

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

              <div className="text-white flex flex-col items-center h-80 mt-32 justify-between">
                <div className="text-4xl">HOME</div>
                <div className="text-4xl">ABOUT</div>
                <div className="text-4xl">SERVICE</div>
                <div className="text-4xl">FEATUERS</div>
              </div>
           
            

          </div>

          <nav class="md:ml-auto text-white md:mr-auto flex flex-wrap items-center text-base justify-center hidden md:block">
            <a class="mr-5 hover:text-gray-900">HOME</a>
            <a class="mr-5 hover:text-gray-900">ABOUT</a>
            <a class="mr-5 hover:text-gray-900">SERVICES</a>
            <a class="mr-5 hover:text-gray-900">GALLERY</a>
          </nav>
          <button class="inline-flex items-center hidden md:block bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Contact
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;

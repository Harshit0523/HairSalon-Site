import React from 'react'
import ab2 from '../ab2.jpg'
const About = () => {
  return (
    <>

<section class="text-gray-600 body-font bg-black">
  <h1 className='text-center text-5xl bold text-yellow-400 py-24 '>ABOUT OUR SALON</h1>
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10  md:mb-0">
      <img class="object-cover object-center " alt="hero" src={ab2}/>
     
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium ">THE BEST HAIR SALON
        <br class="hidden lg:inline-block"/>IN YOUR CITY CHHINDWARA
      </h1>
      <p class="mb-8 leading-relaxed">"Welcome to our haven of transformation, where skilled hands craft beauty and confidence. Our salon isn't just about style—it's a narrative. Each appointment becomes a chapter, blending expertise and individuality to create a masterpiece of personal empowerment and timeless allure.".</p>
      
    </div>
  </div>
</section>

    </>
  )
}

export default About
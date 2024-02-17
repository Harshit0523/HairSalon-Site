import React from 'react'
import img1 from "../cone/image1.JPG"
import img2 from "../cone/image2.JPG"
// import img3 from "../cone/image3.JPG"
import img4 from "../cone/image4.JPG"
import img5 from "../cone/image5.JPG"
import img6 from "../cone/image6.JPG"
import img7 from "../cone/image7.mp4"
import img8 from "../cone/image8.JPG"
import img9 from "../cone/image9.JPG"
import img10 from "../cone/image10.JPG"


// import c from "../1.webp"

const Gallery = () => {
  return (
    <>
  
    <section className='bg-black'>

      <h1 className='text-5xl text-center text-white'>Our Customer's</h1>
 
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
    <div class="grid gap-4 ">
        <div className=''>
            <img class="h-auto max-w-full rounded-lg" src={img1} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img2} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} />
        </div>
        
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img4} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img5} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img6} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <video class="h-auto max-w-full rounded-lg" src={img7} autoplay loop alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img8} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img9} alt=""/>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img10} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img8} alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src={img6} alt=""/>
        </div>
    </div>
</div>



</section>

    </>
  )
}

export default Gallery
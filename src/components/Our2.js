import React, { useEffect } from "react";
import Glide from "@glidejs/glide";

export default function Our2() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      <section class="text-white bg-black body-font ">
        <div class="container px-5 py-20 mx-auto">
          <div class="text-center mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4 -mt-20">
              Our Services
            </h1>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
            </div>
          </div>

          {/*<!-- Component: Carousel with controls outside --> */}
          <div className="glide-04 relative w-full">
            {/*    <!-- Slides --> */}
            <div className="overflow-hidden" data-glide-el="track">
              <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                
                <div className="relative bg-gradient-to-t from-black to-slate-500">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                    className="m-auto max-h-full w-full max-w-full  object-cover absolute mix-blend-overlay"
                  />

                    <h1 className="text-4xl mt-40 text-center bold text-amber-500">Hair Cut</h1>     
               
                </div>


                <div className="relative bg-gradient-to-t from-black to-slate-500">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                    className="m-auto max-h-full w-full max-w-full  object-cover absolute mix-blend-overlay"
                  />

                    <h1 className="text-4xl mt-40 text-center bold text-amber-500">Hair Cut</h1>     
               
                </div>



                <div className="relative bg-gradient-to-t from-black to-slate-500">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                    className="m-auto max-h-full w-full max-w-full  object-cover absolute mix-blend-overlay"
                  />

                    <h1 className="text-4xl mt-40 text-center bold text-amber-500">Hair Cut</h1>     
               
                </div>


                <div className="relative bg-gradient-to-t from-black to-slate-500">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                    className="m-auto max-h-full w-full max-w-full  object-cover absolute mix-blend-overlay"
                  />

                    <h1 className="text-4xl mt-40 text-center bold text-amber-500">Hair Cut</h1>     
               
                </div>

                
                <div className="relative bg-gradient-to-t from-black to-slate-500">
                  <img
                    src="https://Tailwindmix.b-cdn.net/carousel/carousel-image-05.jpg"
                    className="m-auto max-h-full w-full max-w-full  object-cover absolute mix-blend-overlay"
                  />

                    <h1 className="text-4xl mt-40 text-center bold text-amber-500">Hair Cut</h1>     
               
                </div>






                
              </ul>
            </div>
            {/*    <!-- Controls --> */}
            
          </div>
        </div>
      </section>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}

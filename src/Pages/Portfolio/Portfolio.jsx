import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Portfolio.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="bg-black py-32">
        <h2 className="text-4xl font-bold text-center text-[#EAB308] pb-10">My Portfolio</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src="/images/p1.png" alt="project" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-between">
                <Link to='https://github.com/Tanvir-art/techno-Front' target="_blank">
                <button className="btn bg-[#EAB308]">Github Code</button>
                
                </Link>
                <Link to='https://technocrud-b57e7.web.app/' target="_blank">
                <button className="btn bg-[#EAB308]">Live Link</button>
                
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src="/images/p2.png" alt="project" />
            </figure>
            <div className="card-body">
            <div className="card-actions justify-between">
                <Link to='https://github.com/Tanvir-art/asset-front' target="_blank">
                <button className="btn bg-[#EAB308]">Github Code</button>
                
                </Link>
                <Link to='https://assetmanaegment.web.app/' target="_blank">
                <button className="btn bg-[#EAB308]">Live Link</button>
                
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img src="/images/p3.png" alt="project" />
            </figure>
            <div className="card-body">
            <div className="card-actions justify-between">
                <Link to='https://github.com/Tanvir-art/dragAndDrop' target="_blank">
                <button className="btn bg-[#EAB308]">Github Code</button>
                
                </Link>
                <Link to='https://65449324e6c316538ba53e34--jocular-maamoul-8c3cd9.netlify.app/' target="_blank">
                <button className="btn bg-[#EAB308]">Live Link</button>
                
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Portfolio;

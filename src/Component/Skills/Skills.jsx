import React from "react";
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div className="bg-black py-20 z-10">
        <h2 className="text-3xl text-[#eab308] font-bold text-center pb-10">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-32 pt-20 px-10 md:px-10 lg:px-20">
          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-10 md:px-10 lg:px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <FaHtml5 />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Html5</h2>
            <p className="text-sm lg:text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-10 md:px-10 lg:px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <FaCss3 />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Css</h2>
            <p className="text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-10 md:px-10 lg:px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <IoLogoJavascript />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Javascript</h2>
            <p className="text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <FaReact />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">React</h2>
            <p className="text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>


          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <FaNodeJs />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Nodejs</h2>
            <p className="text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>


          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <SiExpress />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Express Js</h2>
            <p className="text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 bg-[#141410] px-20 py-24">
            <p className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#eab308]">
              <SiMongodb />
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">MongoDb</h2>
            <p className="text-lg leading-[33px] text-justify text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              totam ipsum assumenda, qui corrupti reiciendis culpa facilis
              laborum iste? Sed!
            </p>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Skills;

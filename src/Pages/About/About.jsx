import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const About = () => {
  return (
    <div className="bg-black text-white py-10  md:py-20 lg:py-32">
      <div className=" flex flex-col md:flex-col lg:flex-row">
        <div className="flex-1">
          <div className="pl-3 md:pl-6 lg:pl-10">
            <div className="py-4">
              <span className="text-[#eab308]">Name</span>
              <div className="text-xl md:text-xl lg:text-2xl font-medium">Ahana Gill</div>
            </div>
            <div className="pb-4">
              <span className="text-[#eab308]">Date of birth</span>
              <div className="text-xl md:text-xl lg:text-2xl font-medium">April, 4 1997</div>
            </div>
            <div className="pb-4">
              <span className="text-[#eab308]">Email id</span>
              <div className="text-xl md:text-xl lg:text-2xl font-medium">
                <p>tanvir.web.dev.cse@gmail.com</p>
              </div>
            </div>
            <div className="pb-4">
              <span className="text-[#eab308]">Phone no.</span>
              <div className="text-xl md:text-xl lg:text-2xl font-medium">+88 01705266418</div>
            </div>
            <div className="pb-4">
              <span className="text-[#eab308]">Address</span>
              <div className="text-xl md:text-xl lg:text-2xl font-medium">Dhaka,Bangladesh</div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#eab308] py-6">About Me</h2>
          <p className="text-sm md:text-lg leading-[33px] pr-6 text-justify">
            Hello there! My name is Robert Elisc. I am a web designer &
            developer, and I'm very passionate and dedicated to my work. With 20
            years experience as a professional a graphic designer, I have
            acquired the skills and knowledge necessary to make your project a
            success. I enjoy every step of the design process, from discussion
            and collaboration.
          </p>

          <div className=" py-3 flex gap-4">
          <Link to='https://github.com/Tanvir-art' target="_blank">
            <button className="px-6 py-3 rounded bg-[#eab308]"><FaGithub className="text-xl"/></button>
        </Link>

        <Link to='https://www.linkedin.com/in/tanvir-hasan-a4126b237/' target="_blank">
            <button className="px-6 py-3 rounded bg-[#eab308]"><FaLinkedin className="text-xl"/></button>
        </Link>
          </div>

        </div>
      </div>

      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#eab308] font-bold py-4">My Experience</h2>
      
      <div className="flex flex-col px-10 md:flex-col lg:flex-row justify-around pt-12 gap-4">
        <div className="bg-[#141410] px-10 py-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold">10+</h2>
          <p className="text-xl py-3">YEARS OF EXPERIENCE</p>
        </div>

        <div className="bg-[#141410] px-10 py-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold">20+</h2>
          <p className="text-xl py-3">Still Project Completed</p>
        </div>

        <div className="bg-[#141410] px-10 py-12 flex flex-col items-center">
          <h2 className="text-4xl font-bold">30+</h2>
          <p className="text-xl py-3">Happy Client In World</p>
        </div>
      </div>
    </div>
  );
};

export default About;

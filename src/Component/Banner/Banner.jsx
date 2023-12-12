import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";
import { saveAs } from 'file-saver';
const Banner = () => {

  const downloadPdf = () => {
    const filePath = '/public/cv.pdf';
    saveAs(filePath, '/public/cv.pdf');

    // Trigger download using file-saver
    // saveAs(filePath, 'cv.pdf');
  };

  return (
    <div className="bannerBg text-white  flex flex-col md:flex-col lg:flex-row justify-between items-center py-32">
      <div className="flex-1 pl-12">
        <h2 className="text-2xl md:text-2xl lg:text-3xl font-bold leading-[55px] uppercase">
          Hello, I'm Tanvir Hasan! <br />
          CREATIVE{" "}
          <span style={{ color: "#eab308", fontWeight: "bold" }}>
            <Typewriter
              words={["FRONTEND DEVELOPER", "PROGRAMMER", "MERN DEVELOPER"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-lg leading-[35px] py-6">
          I am a passionate front-end developer I love creating awesome and
          eye-catching websites. My journey in web development has been super
          exciting and fulfilling. I'm always eager to dive into new
          technologies and stay on top of the latest design trends. Let's build
          something amazing together!
        </p>

        <div>
          <button onClick={downloadPdf} className="btn bg-[#eab308]">Download Cv</button>
        </div>
      </div>

      <div className="flex-1">
        <img  src="/images/bannerr.png" alt="banner" />
      </div>
    </div>
  );
};

export default Banner;

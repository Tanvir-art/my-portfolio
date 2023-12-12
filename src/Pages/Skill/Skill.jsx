import React from "react";
import Skills from "../../Component/Skills/Skills";

const Skill = () => {
  return (
<div className="bg-black">
    <Skills/>

    <div className="text-white">
        <h2 className="text-center font-bold text-4xl text-[#eab308]">My Education</h2>
        <p className="text-sm lg:text-lg leading-[33px] text-center py-6 mx-32">Neque porro quisquam est, qui dolorem ipsum quia dolor sit consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse quam nihil</p>

        <div>
            <div className="flex justify-around items-center border-y border-solid  border-[#eab308] mx-6  md:mx-10 lg:mx-20 py-4">
                <p className="text-sm lg:text-lg text-[#eab308] font-bold">2017-2023</p>
                <div className="">
                    <h2 className="text-xl font-bold pb-4">BSC In Computer Science & Engineering</h2>
                    <p className="text-sm lg:text-lgtext-[#eab308]">Rangamati Science & Technology University</p>
                </div>
            </div>
        </div>

        <div>
            <div className="flex justify-around items-center border-y border-solid  border-[#eab308] mx-6  md:mx-10 lg:mx-20 py-4">
                <p className="text-lg text-[#eab308] font-bold">2013-2015</p>
                <div className="">
                    <h2 className="text-xl font-bold pb-4">Higher School Certificate</h2>
                    <p className="text-sm lg:text-lg text-[#eab308]">Hajigonj Model College</p>
                </div>
            </div>
        </div>


        <div>
            <div className="flex justify-around items-center border-y border-solid  border-[#eab308] mx-6  md:mx-10 lg:mx-20 py-4">
                <p className="text-sm lg:text-lg text-[#eab308] font-bold">2011-2013</p>
                <div className="">
                    <h2 className="text-xl font-bold pb-4">Secondary School Certificate</h2>
                    <p className="text-sm lg:text-lgtext-[#eab308]">Nizmeher Model Pilot High School</p>
                </div>
            </div>
        </div>


    </div>
</div>
  );
};

export default Skill;

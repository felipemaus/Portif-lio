import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="z-[0]">
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let´s build something legendary together!
          </p>
          <h1 className="py-4 text-gray-700 text-6xl ">
            Hi, im <span className="text-[#cf2929]">Felipe</span>
          </h1>
          <h1 className="py-4 text-gray-700 text-6xl ">
            A Front-End Web Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I´m a front-end web developer specializing in building and
            maintenance web projects. Currently, I´m focused on building
            responsive front-end web applications while learning back-end
            technologies. I specialize myself in JavaScript.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

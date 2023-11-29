/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Felipe from "../../public/felipePaipe.png";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 ">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#cf2929]">
            About
          </p>
          <p className="py-2 text-gray-600">Who I am</p>
          <p className="py-2 text-gray-600">
            I´m gaucho from Rio grande do Sul, Brazil
          </p>
          <p className="py-2 text-gray-600">
            I'm 21 years old, I've always been passionate about technology. I
            worked with several things before joining the programming area. I
            was only able to start after training my technical education in IT.
            After that I joined paipe.co, the company that gave me my first
            opportunity as a front-end programmer. I started working with
            ReactJS and now I work with Next.Js using TypeScript as well. And in
            addition to the front end, I've been looking to learn the backend.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Checkout some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={Felipe} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

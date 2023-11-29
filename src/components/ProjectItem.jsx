import Image from "next/image";
import Link from "next/link";
import React from "react";
import Paperon from "../../public/assets/projects/Paperon.jpg";

const ProjectItem = ({ title, backgroundImg, projectUrl, language }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#cf2929] to-[#3b0a0a]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top=[50%] left-[50%] translate-x-[50%] translate-y-[50%]">
        <h3 className="text-2x1 text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{language}</p>
        <Link href={projectUrl}>
          <p className="text-center p-3  rounded-lg bg-white text-gray-700 font-bold text-lg">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;

import Image from "next/image";
import React from "react";
import Next from "../../public/next.svg";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="mas-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#cf2929]">
          Skills
        </p>
        <h2>What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>JavaScript</h3>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Image
                  src="/../public/assets/skills/typescript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>TypeScript</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>React</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Tailwind</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/firebase.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex flex-col">
                <Image
                  src="/../public/assets/skills/github.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Github</h3>
                </div>
              </div>
              <div className="m-auto flex flex-col">
                <Image
                  src="/../public/assets/skills/gitlab.png"
                  width="64"
                  height="64"
                  alt="/"
                />
                <div className="flex flex-col items-center justify-center">
                  <h3>Gitlab</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt="/"
                />

                <div className="flex flex-col items-center justify-center">
                  <h3>Next JS</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

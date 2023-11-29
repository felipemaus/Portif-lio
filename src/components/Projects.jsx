import React from "react";
import ProjectItem from "./ProjectItem";
import Paperon from "../../public/assets/projects/Paperon.jpg";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ca6161]">
          Projects
        </p>
        <h2 className="py-4">What I-ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="PaperOn"
            backgroundImg={Paperon}
            projectUrl="https://paperon.app/"
            language="React TS"
          />
          {/* <ProjectItem
            title="99Influence"
            backgroundImg={Paperon}
            projectUrl="https://paperon.app/"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

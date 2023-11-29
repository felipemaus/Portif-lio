import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

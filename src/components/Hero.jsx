import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="bg-emerald-100 py-24  ">
      <div className=" mx-auto max-w-7xl  px-8  grid  md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I&apos;m Hosein</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-end developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <p>#OpenForWork!</p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/r8now">
              <FaGithubSquare className="h-16 w-16 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.linkedin.com/in/hosein-moustafa-4b8793184">
              <FaLinkedin className="h-16 w-16 text-blue-500 hover:text-black duration-300" />
            </a>
            
          </div>
        </article>

        <article className="hidden md:block ">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  );
};
export default Hero;

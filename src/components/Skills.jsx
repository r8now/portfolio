
import {skills} from "../data"
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'
import {useState} from "react"

const Skills = () => {
  const [show,setShow] = useState(false);

const full = show ? skills : skills.slice(0, 4);

  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="tech skills" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {full.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
      <button
        className="pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[1rem] font-semibold leading-5 text-white hover:bg-indigo-500"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Show less" : "Show more"}
      </button>
    </section>
  );
}

export default Skills
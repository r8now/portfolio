
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="aboutSvg" className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffe" />
          <p className="text-slate-600 mt-8 leading-loose">
            Junior frontend developer with some backend knowledge. 34 years old,
            born and raised in Sweden. I spend my free time either working out
            and helping others as a personal trainer, cherishing moments with my
            family, or going on motorcycle rides during the weekends. I really enjoy learning new things and to code as much as i can so that i can become a better developer.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About
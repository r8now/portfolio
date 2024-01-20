import CoffeGif from "./CoffeGif";

import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20 " id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
          <CoffeGif className="w-full h-64 " />
        <article>
          <SectionTitle text="code &#x2328;  and coffee &#x2615;" />
          <p className="text-slate-600 mt-8 text-lg leading-loose">
            Junior frontend developer with some backend knowledge. 34 years old,
            born and raised in Sweden. I spend my free time either working out
            and helping others as a personal trainer{" "}
            <span className="text-2xl">&#x1F4AA;</span> , cherishing moments
            with my family, or going on motorcycle{" "}
            <span className="text-2xl">&#x1F3CD;</span> rides during the
            weekends. I really enjoy learning new things and to code as much as
            i can so that i can become a better developer. I am also very active
            on discord and facebook helping beginners with their code.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About
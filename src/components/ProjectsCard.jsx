import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({url,img,github,title,text}) => {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <img
        src={img}
        alt={title}
       
        className="w-full object-fit   rounded-t-lg h-64"
      />
      <div className="p-8">
        <h2>{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-12 w-12 text-blue-500 hover:text-black duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-12 w-12 text-slate-700 hover:text-black duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;

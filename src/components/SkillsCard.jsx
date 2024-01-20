const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="p-6 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      <span className="flex justify-center text-3xl text-indigo-600">
        {icon}
      </span>
      <h4 className="mt-6 text-xl font-bold text-gray-800">{title}</h4>
      <p className="mt-2 text-base text-slate-500">{text}</p>
    </article>
  );
};

export default SkillsCard;

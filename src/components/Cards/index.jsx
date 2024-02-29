
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "Estilos Diversificados",
    icon: (
      <FaCameraRetro className="text-5xl text-cyan-700
       group-hover:text-white duration-300" />),
    id: 1,
    description: "Delegacia de Polícia e Flagrante",
  },
  {
    name: "Técnica Impecável",
    icon: (
      <GiNotebook className="text-5xl text-cyan-700
       group-hover:text-white duration-300" />
    ),
    id: 2,
    description: "Tráfico de Drogas e Lavagem de Dinheiro",
  },
  {
    name: "Experiência Personalizada",
    icon: (
      <SlNote className="text-5xl text-cyan-700
       group-hover:text-white duration-300" />
    ),
    id: 3,
    description: "Roubo, Furto e Sequestro",
  },
  {
    name: "Estilos Diversificados",
    icon: (
      <FaCameraRetro className="text-5xl text-cyan-700
       group-hover:text-white duration-300" />),
    id: 4,
    description: "Importunação Sexual e Estupro",
  },
  {
    name: "Técnica Impecável",
    icon: (
      <GiNotebook className="text-5xl text-cyan-700
       group-hover:text-white duration-300" />),
    id: 5,
    description: "Utilizo técnicas avançadas e materiais de alta qualidade para garantir que cada tatuagem seja durável",
  },
  {
    name: "Experiência Personalizada",
    icon: (
      <SlNote className="text-5xl text-cyan-700
       group-hover:text-white duration-300" />
    ),
    id: 6,
    description: "Valorizo a colaboração com meus clientes para criar tatuagens que se alinham com suas visões e significados pessoais. ",
  },
];
const Skills = () => {
  return (
    <>
      <span id="about"></span>

      <div className="py-20">
        <div className="px-10">
          <div className="py-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-3 sm:px-10 md:gap-6 md:px-6  xl:gap-10 xl:px-20">
            {skillsData.map((skill) => (
              <div key={skill.name} className=" card group space-y-3 p-4 rounded-md bg-dark hover:bg-cyan-700 duration-300 transition-all text-white shadow-md">
                <div>{skill.icon}</div>
                <h1 className="md:text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

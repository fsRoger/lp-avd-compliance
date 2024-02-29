import { FaCameraRetro } from 'react-icons/fa';
import { GiNotebook } from 'react-icons/gi';
import { SlNote } from 'react-icons/sl';
import { GiInjustice } from "react-icons/gi";

const skillsData = [
  {
    name: "Estilos Diversificados",
    icon: (
      <FaCameraRetro className="text-5xl text-[rgb(16,31,45)]
       group-hover:text-white duration-300" />),
    description: "Sem burocracia e 100% remoto. Realizamos todos os protocolos necessários e te orientamos em todo o processo.",
  },
  {
    name: "Técnica Impecável",
    icon: (
      <GiNotebook className="text-5xl text-[rgb(16,31,45)]
       group-hover:text-white duration-300" />),
    description: "Tráfico de Drogas e Lavagem de Dinheiro",
  },
  {
    name: "Experiência Personalizada",
    icon: (
      <SlNote className="text-5xl text-[rgb(16,31,45)]
       group-hover:text-white duration-300" />),
    description: "Roubo, Furto e Sequestro",
  },
  {
    name: "Estilos Diversificados",
    icon: (
      <FaCameraRetro className="text-5xl text-[rgb(16,31,45)]
       group-hover:text-white duration-300" />),
    description: "Importunação Sexual e Estupro",
  },
  {
    name: "Técnica Impecável",
    icon: (
      <GiNotebook className="text-5xl text-[rgb(16,31,45)]
       group-hover:text-white duration-300" />),
    description: "Utilizo técnicas avançadas e materiais de alta qualidade para garantir que cada tatuagem seja durável",
  },
  {
    name: "Experiência Personalizada",
    icon: (
      <GiInjustice className="text-5xl text-[rgb(16,31,45)]
       group-hover:text-white duration-300" />),
    description: "Valorizo a colaboração com meus clientes para criar tatuagens que se alinham com suas visões e significados pessoais. ",
  },
];
const CardsBottom = () => {
  return (
    <>
      <span id="about"></span>

      <div className="bg-cyan-600 py-14">
        <div className="px-10">
          <div className="py-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 sm:gap-3 sm:px-10 md:gap-6 md:px-6  xl:gap-10 xl:px-20">

            {skillsData.map((skill) => (
              <div key={skill.name} className=" card group space-y-3 p-4 rounded-md bg-white hover:bg-[rgb(16,31,45)] hover:text-white duration-300 transition-all text-gray-700 shadow-md">
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

export default CardsBottom;

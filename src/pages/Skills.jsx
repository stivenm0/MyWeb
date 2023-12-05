import { useEffect } from "react";
import data from "../data";

function Skills() {
  useEffect(() => {
    document.title = "Habilidades - Stivenm";
  }, []);

  return (
    <div>
      <section className="px-5 py-5">
        <header className="md:px-0">
          <h1 className="text-3xl font-semibold leading-snug text-gray-900 lg:leading-relaxed">
            Skills
          </h1>
        </header>
        <p className="mt-4 leading-relaxed md:text-xl text-slate-700 ">
          Cuento con conocimientos en Backend con PHP(Laravel) 
          y también con bases en Frontend con React, además de conocer buenas prácticas como Maquetación
          Semántica, Metodología BEM, Diseño Mobile-First , Diseño Responsivo,
          POO,  entre otras. Gran parte de mis conocimientos los he adquirido de
          forma autodidacta y en cursos o capacitaciones.  Estoy comprometido con el aprendizaje continuo y ansío contribuir al crecimiento de proyectos desafiantes, demostrando flexibilidad, responsabilidad y habilidades efectivas de resolución de problemas.
        </p>
      </section>

      <section className="container px-5 py-10 mx-auto">
        <header className="md:px-0">
          <h1 className="text-3xl font-semibold leading-snug text-gray-900 lg:leading-relaxed">
            Tecnologías
          </h1>
        </header>
        <div className="flex flex-wrap -m-4 text-center">
          {data.certifications.map((c, index) => (
            <div className="w-full p-4 sm:w-1/2 md:w-1/4 " key={index}>
              <div className="flex flex-col items-center px-2 py-2 transition duration-300 transform border-2 border-gray-600 rounded-lg hover:scale-110 hover:bg-gray-300">
                <img className="w-12" src={c.img} loading="lazy" />
                <h2 className="text-3xl font-medium text-gray-900 title-font">
                  {c.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skills;

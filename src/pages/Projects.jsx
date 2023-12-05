import { useEffect } from "react";
import data from "../data"
import Project from "../components/Project";

function Projects() {
  useEffect(() => {
    document.title = "Proyectos - Stivenm";
  }, []);

  

  return (
    <ul className="grid items-start grid-cols-1 p-4 md:p8 gap-y-10 gap-x-6">
      {
        data.projects.map((p, index)=>(
          <Project key={index} title={p.title} img={p.img} description={p.description}
          repository={p.repository} link={p.link} stack={p.stack} />
        ))
      }
    </ul>
  );
}

export default Projects;

import React from 'react';
import "./projects.css"
import ProjectsCards from './ProjectsCards';
import ProjectTitle from './ProjectTitle';

function Projects() {

    let buttonDescription ="Ver mas";

  return (
    <>
      <ProjectTitle title="Projects"></ProjectTitle>
      <div className='container-projects'>
          <ProjectsCards title="Project1" url="/imgs/proyecto1.jpg" description="Inspirado en las cabezas con iconos ilustres de la epoca de antaño" buttonDescription={buttonDescription}></ProjectsCards>
          <ProjectsCards title="Project1" url="/imgs/proyecto1.jpg" description="Inspirado en las cabezas con iconos ilustres de la epoca de antaño" buttonDescription={buttonDescription}></ProjectsCards>
          <ProjectsCards title="Project1" url="/imgs/proyecto1.jpg" description="Inspirado en las cabezas con iconos ilustres de la epoca de antaño" buttonDescription={buttonDescription}></ProjectsCards>
          <ProjectsCards title="Project1" url="/imgs/proyecto1.jpg" description="Inspirado en las cabezas con iconos ilustres de la epoca de antaño" buttonDescription={buttonDescription}></ProjectsCards>
      </div>
    </>
  )
}

export default Projects
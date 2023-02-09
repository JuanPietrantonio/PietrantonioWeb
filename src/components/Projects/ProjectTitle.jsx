import React from 'react';
import "./projects.css"

function ProjectTitle(props) {
  return (
    <div className='projects-title-div'>
        <h2 className='projects-title'>{props.title}</h2>
    </div>
  )
}

export default ProjectTitle
import React from 'react';
import "./projects.css"

function ProjectsCards(props) {
  return (
    <div className='card-container'>
        <h3>{props.title}</h3>
        <div>
            <img src={props.url} ></img>
        </div>
        <p>{props.description}</p>
        <button>{props.buttonDescription}</button>
    </div>
  )
}

export default ProjectsCards
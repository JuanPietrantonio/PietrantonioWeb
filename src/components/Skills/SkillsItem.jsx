import React from 'react';
import Card from 'react-bootstrap/Card';
import "./skills.css";


function SkillsItem(props) {
  return (
    <div  className='skillsitem'>
      <Card border={props.border} bg={props.bg} >
        <Card.Img variant={props.variant}  src={props.src}   />
        <Card.Body>
          <Card.Title className='cardtitle'>{props.title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SkillsItem
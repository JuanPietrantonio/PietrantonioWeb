import React from 'react';
import "./me.css";

function Img(props) {
  return (
    <div className='img'>
        <img src={props.url}></img>
    </div>
  )
}

export default Img
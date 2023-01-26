import React from 'react';
import MeImg from './MeImg';
import "./me.css"; 
import MeInfo from './MeInfo';

function Me() {
  return (
    <div className='me'>
        <MeImg></MeImg>
        <MeInfo></MeInfo>
    </div>
  )
}

export default Me
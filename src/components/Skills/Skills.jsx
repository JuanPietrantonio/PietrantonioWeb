import React from 'react';
import "./skills.css"
import SkillsItem from './SkillsItem';
import SkillsTitle from './SkillsTitle';

function Skills() {

  let border = "dark";
  let variant = "top";
  let bg = "dark";
  let textColor = "dark";

  return (
    <div className='skills'>
      <div className='skillstitlediv'>
        <SkillsTitle title="My Skills"/>
      </div>
      <div className='skillslist'>
        <SkillsItem  className="skills-item-card"
        border={border}
        variant={variant}
        bg={bg}
        textColor={textColor}
        src="./imgs/HTML5.svg"
        title="HTML5"
        />
        <SkillsItem
        border={border}
        variant={variant}
        bg={bg}
        textColor={textColor}
        src="./imgs/CSS3.svg"
        title="CSS3"
        />
        <SkillsItem
        border={border}
        variant={variant}
        bg={bg}
        textColor={textColor}
        src="./imgs/javascript.svg"
        title="JavaScript"
        />
        <SkillsItem
        border={border}
        variant={variant}
        bg={bg}
        textColor={textColor}
        src="./imgs/react.svg"
        title="React"
        />
        <SkillsItem
        border={border}
        variant={variant}
        bg={bg}
        textColor={textColor}
        src="./imgs/bootstrap.svg"
        title="Bootstrap"
        />
      </div>
    </div>
  )
}

export default Skills
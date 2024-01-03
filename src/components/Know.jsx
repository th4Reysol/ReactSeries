import React from 'react'
import SkillCard from './KnowME/SkillCard'
import {Link} from 'react-router-dom'

const Know = props => {
  return (
    <>
      <div>
        <h2>Here are MY Skills</h2>
        <p id='k_comment'>*I list some skills in which I am very confident. </p>
      </div>
      <SkillCard />
      <div id='closing'>
        <h2>OTHERS!</h2>
        *This is a part of my skills, with which I will contribute so much to you.
        <br />
        *If you would know more, contact me <Link to={"/with"}><span className='lnk'>HERE!</span></Link>
        <br />
        *Go to <Link to={"/about"}><span className='lnk'>AboutME</span></Link> for my career path!
      </div>
    </>
  )
}

export default Know
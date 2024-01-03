import React from 'react';
import Articles from './Articles';
import {Link} from 'react-router-dom';


const Preface = () => {
  return (
    <div>
      <div className='greeting'>
        <h1>Hi! This is TH168.</h1>
        <p>Follow these pages below! It would be my biggest honor if you kindly know even a little bit of my profile.</p>
      </div>
      <div className='articles'>
        <Articles title='About ME (Profile)' url='/about'/>
        <Articles title='Know ME (Skill)' url='/know'/>
        <Articles title='With ME (Contact)' url='/with'/>
      </div>
      <div>
        <p>*I recommend that the first-timer start from <Link to={"/about"}><span className='lnk'>About ME</span>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Preface
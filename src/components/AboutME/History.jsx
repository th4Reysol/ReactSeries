import React from 'react';
import Resume from './Resume';
import {Link} from 'react-router-dom'



const History = () => {
  return (
  <>
    <div className='history'>
        <Resume />
    </div>
    <div id='closing'>
      <h2>NOT ONLY THIS!</h2>
      *To improve my skills further, I currently learn about React.js, Django, and Python, GoLang, and so on.
      <br />
      *Go to <Link to={"/know"}><span className='lnk'>KnowME</span></Link> for my skills in detail!
    </div>
    
    
  </>
  )
}

export default History
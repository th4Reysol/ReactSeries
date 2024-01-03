import React from 'react'
import {Link} from 'react-router-dom'

const MyCareer = () => {
  return (
    <div className='careers'>
        <h1>My Career Path</h1>
        <p>Below shows my past and current jobs.
            <br />
            For your quicker check, <Link to={"/know"}><span className='lnk'>KnowME</span></Link> provides you with a list of my skills.
        </p>
        
    </div>
  )
}


export default MyCareer
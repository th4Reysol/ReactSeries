import React from 'react';
import Service from './WithME/Service';


const With = props => {
  return (
    <>
        <div className='withYou'>
          <h2>With You!</h2>
        </div>
        <div className='withYou'>
          <p>I would thank you again for your visit to my website.</p>
        </div>
        <div className='withYou'>
          <p>This page is for those who would like my services for your project.</p>
        </div>
        <div className='withYou'>
          <p>I hope that we will work together within recent days.</p>
        </div>
        <Service />

        <div className='closingAdd'>
          <p>It would be my greatest pleasure if I could be your choice.</p>
        </div>
    </>
  )
}


export default With
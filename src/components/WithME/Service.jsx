import React from 'react';
import Program from './Program';

const Service = props => {
  return (
    <>
        <div className='services'>
            <h2>Services</h2>
            <div className='withYou'>
              <p id='s_comment'>You will use these services.</p>
            </div>
        </div>
        <Program />
        <div className='services'>
            <h2>Price per month</h2>
            <div className='withYou'>
              <p id='price'>
                At least \400,000 ~ for each service. <br />
                *Actual fee changes depending on your project scales. <br />
                Thank you in advance so much for your consideration.
              </p>
            </div>
        </div>


    </>
  )
}
export default Service
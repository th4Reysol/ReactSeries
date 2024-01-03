import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='head_area'>
        <Link to={"/"}>
            <img src="./images/logo.png" 
            width={150} 
            height={100} 
            alt="何もないよ" srcset="" />
        </Link>
        
        <h1>Find ME OUT!</h1>
        <nav>
            <ul>
                <li className='nav_item'>
                    <a className='buttons'href='/about'>About ME</a>
                </li>
                <li className='nav_item'>
                    <a className='buttons' href='/know'>Know ME</a>
                </li>
                <li className='nav_item'>
                    <a className='buttons' href='/with'>With ME</a>   
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header
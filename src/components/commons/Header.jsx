import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';

function header() {
    return (
        <header id='header'>
        <div class='header container'>
          <div class='nav-bar'>
            <div class='brand'>
              <a href='#hero'>
                <h1><span>R</span>oqueheli <span>A</span>renas</h1>
              </a>
            </div>
            <div class='nav-list'>
              <div class='hamburger'>
                <div class='bar'></div>
              </div>
              <ul>
                <li><Link to='/' data-after='Home'>Home</Link></li>
                <li><Link to='/skills' data-after='Skills'>Skills</Link></li>
                <li><Link to='/projects' data-after='Projects'>Projects</Link></li>
                <li><Link to='/about' data-after='About'>About</Link></li>
                <li><Link to='/contact' data-after='Contact'>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    )
}

export default header;

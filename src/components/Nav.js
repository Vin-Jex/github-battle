import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='row space-between'>
          <ul className='row nav'>
            <li>
              <Link to='/' className='naval nav-link '>Popular</Link>
            </li>
            <li>
              <Link to='/battle' className='naval nav-link'>Battle</Link>
            </li>
          </ul>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? <FaMoon color='rgb(53, 48, 48)' size={35}/> : <FaSun color='rgba(207, 24, 24, 0.829)' size={35}/>}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}
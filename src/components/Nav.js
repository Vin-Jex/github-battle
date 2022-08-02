import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { FaSun, FaMoon } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default function Nav () {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='nav-row space-between margin-top'>
          <ul className='nav-row nav'>
            <li>
              <NavLink 
                to='/'
                exact
                activeStyle={activeStyle}
                className='naval nav-link'>
                  Popular
              </NavLink>
            </li>
            <li>
              <NavLink 
                to='/battle'
                activeStyle={activeStyle}
                className='naval nav-link'>
                  Battle
              </NavLink>
            </li>
          </ul>
          <button
            style={{fontSize: 30}}
            className='btn-clear'
            onClick={toggleTheme}
          >
            {theme === 'light' ? <FaMoon color='rgb(53, 48, 48)' className='icon' /> : <FaSun color='rgba(207, 24, 24, 0.829)' className='icon' />}
          </button>
        </nav>
        
      )}
    </ThemeConsumer>
  )
}
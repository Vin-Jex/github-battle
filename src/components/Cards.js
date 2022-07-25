import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'

export default function Cards({ header, subheader, avatar, href, name, children }) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`card bg-${theme}`}>
          <h4 className='header-lg center-text'>
            {header}
          </h4>
          <img src={avatar} 
            alt={`Avatar for ${name}`}
            className="avatar" 
          />
          {subheader && (
            <h4 className="center-text">
              {subheader}
            </h4>  
          )}
          <h2 className="center-text">
            <a href={href} 
              target='_blank' 
              rel="noreferrer noopener"
              className="link" 
            >
              {name}
            </a>
          </h2>
          {children}
        </div>
      )}
    </ThemeConsumer>
  )
}

Cards.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
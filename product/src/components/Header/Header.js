import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
const Header = (darkMode,isDarkMode) => {
  return (
    <header>
                <h1>Where in the world ?</h1>
                <div  className="theme">
                    <FontAwesomeIcon icon=" fa-moon" />
                    <p className="theme__type">
                        Dark mode
                    </p>
                </div>
        </header>
  )
}

export default Header
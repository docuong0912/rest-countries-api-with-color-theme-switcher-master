import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Searchbar = ({setFilter}) => {

  return (
    <div className='search-container'>
      <div className='search-bar'>
        <FontAwesomeIcon icon="fa-magnifying-glass" />
        <input onChange={val=>setFilter(val.target.value)} type="text" placeholder='Search for a country'/>
      </div>
     
      
    </div>
  )
}

export default Searchbar;
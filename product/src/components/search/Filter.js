import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';


const Filter = () => {
    const navigate = useNavigate();
    const filter = (name)=>{
        navigate(`/filter/${name}`);
    }

  return (
    <div className='filter-container'>
        <div className='filter'>
            
            <p>Filter by Region</p>
            <FontAwesomeIcon icon="fa-chevron-down" />
            
        </div>
        <div  className='filter__content'>
                <ul>
                    <li>None</li>
                    <li onClick={(e) => filter(e.target.textContent)}>Africa</li>
                    <li onClick={(e) => filter(e.target.textContent)}>America</li>
                    <li  onClick={(e) => filter(e.target.textContent)}>Asia</li>
                    <li onClick={(e) => filter(e.target.textContent)}>Europe</li>
                    <li  onClick={(e) => filter(e.target.textContent)}>Oceania</li>
                </ul>
            </div>
    </div>
  )
}

export default Filter;
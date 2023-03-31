import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link,useParams} from 'react-router-dom';


const Filter = () => {
  const params = useParams();
  return (
    <div className='filter-container'>
        <div className='filter'>
            
            <p>Filter by Region</p>
            <FontAwesomeIcon icon="fa-chevron-down" />
            
        </div>
        <div  className='filter__content'>
                <ul>
                    
                    <li><Link to={`/page/${params.page}`}>None</Link></li>
                    <li><Link to='filter/Africa'>Africa</Link></li>
                    <li><Link to='filter/America'>America</Link></li>
                    <li><Link to='filter/Asia'>Asia</Link></li>
                    <li><Link to='filter/Europe'>Europe</Link></li>
                    <li><Link to='filter/Oceania'>Oceania</Link></li>
                </ul>
            </div>
    </div>
  )
}

export default Filter;
import React from 'react';
import {useNavigate} from 'react-router-dom';
const PageNumber = () => {
  const navigate = useNavigate();
  const pages = Array.from({length:25},(_,i)=>i+1);
  return (
    <div className='page-list'>
      {
       pages.map(page=>{
          return(
            <button key={page} onClick={()=>navigate(`/page/${page}`)}>{page}</button>
          );
       })
      }
        
        
    </div>
  )
}

export default PageNumber;
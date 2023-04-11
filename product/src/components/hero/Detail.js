import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Detail = ({flag,border}) => {
  const navigate = useNavigate();
  const viewHome = ()=>{
      navigate(-1);
  }
  return (
    <div>
        <button onClick={viewHome}><FontAwesomeIcon icon="fa-arrow-left" /> Back</button>
        <div>
           {
            flag.map(f=>{
              return(
                <div className='info-container' key={f.name.common}>
                  
                    <img src={f.flags.png} alt="flag"/>  
                  
                  <div className='country'>
                    <div className='country__name'>
                        <b>{f.name.common}</b>
                    </div>
                    <div className='country__maininfo'>
                        <div className='common country__native-name'>
                          <b>Native name:</b>
                          <p>{Object.values(f.name.nativeName)[0].common}</p>
                          
                      </div>
                      
                      <div className='common country__population'>
                          <b>Population:</b>
                          <p>
                            {f.population}
                          </p>
                      </div>
                      <div className='common country__region'>
                          <b>Region:</b>
                          <p>
                            {f.region}
                          </p>
                      </div>
                      <div className='common country__subregion'>
                          <b>Sub Region:</b>
                          <p>
                            {f.subregion}
                          </p>
                      </div>
                      <div className='common country__capital'>
                          <b>Capital:</b>
                          <p>
                            {f.capital}
                          </p>
                      </div>
                    </div>
                    <div className=' country__other-info'>
                        <div className='common country__tld'>
                            <b>Top Level Domain</b>
                            <p>{f.tld[0]}</p>
                        </div>
                        <div className='common country__currency'>
                            <b>Currencies:</b>
                            <p>{Object.values(f.currencies)[0].name}</p>
                        </div>
                        <div className='common country__language'>
                            <b>Languages:</b>
                            <p>{Object.values(f.languages)[0]}</p>
                        </div>
                    </div>
                    <div className='border'>
                      <b>Border Countries:</b>
                      <div className='border-countries'>
                        {
                          border.map(b=>{
                            return (
                              <button key={b[0].name.common} onClick={()=>{navigate(`/detail/${b[0].name.common} `)}}>{b[0].name.common}</button>
                            );
                          })
                        }
                      </div>
                        
                    </div>
                  </div>
                </div>
                
              );
            })
           }
        </div>
    </div>
  )
}

export default Detail;
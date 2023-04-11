import React, { useEffect,useState } from "react";
import {useNavigate,Link,useParams} from 'react-router-dom';
const Hero = ({filter})=>{
    const params = useParams();
    const navigate = useNavigate();
    const view = (name)=>{
        navigate(`/detail/${name} `)
    }
    return (
        <div className="flag-container">
            {
                filter?.map(flag=>{
                    return(
                        <div key={flag.name.common} className="flag" onClick={()=>{view(flag.name.common)}}>
                            <div className="flag-appearance">
                                <img src={flag.flags.png} alt="flag"/>
                            </div>
                            <div className="flag-country">
                                <div className="flag-country__name">
                                    <b>{flag.name.common}</b>
                                </div>
                                <div className="detail">
                                    <div className="detail__population">
                                        <b>Population:</b><p>{flag.population}</p>
                                    </div>
                                    <div className="detail__region">
                                        <b>Region:</b><p>{flag.region}</p>
                                    </div>
                                    <div className="detail_capital">
                                        <b>Capital:</b><p>{flag.capital}</p>
                                    </div>
                                </div>
                               
                            </div>
                           
                            
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Hero;
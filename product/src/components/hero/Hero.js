import React from "react";
const Hero = ({flags})=>{
    return (
    <div className="flag-container">
        <div>
            {
                flags.map(flag=>{
                    return(
                        <div className="flag">
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
    </div>
    );
}
export default Hero;
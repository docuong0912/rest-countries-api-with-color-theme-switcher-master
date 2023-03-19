import React, { useEffect } from "react";

import {useParams} from 'react-router-dom';
import Detail from "./Detail";
const HeroDetail = ({border,getCountryDetail,singleFlag})=>{
    let params = useParams();
    const flag = params.name;
    useEffect(()=>{
       getCountryDetail(flag);
      
    },[flag]);
    return(
        
            <Detail border={border} flag ={singleFlag}/>
            
        
    );
}
export default HeroDetail;
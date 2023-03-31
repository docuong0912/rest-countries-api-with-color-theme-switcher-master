import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';

const FilterList = ({filterByRegion}) => {
    let params = useParams();
    
    useEffect(()=>{
      
      filterByRegion(params.type);
    },[params]);
}

export default FilterList;
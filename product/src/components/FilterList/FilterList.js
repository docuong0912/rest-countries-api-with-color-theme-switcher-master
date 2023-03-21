import React from 'react';
import {useParams} from 'react-router-dom';

const FilterList = () => {
    let params = useParams();
    const type = params.name;
  return (
    <div>FilterList</div>
  )
}

export default FilterList;
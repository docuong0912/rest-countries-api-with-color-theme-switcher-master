import React from "react";
import Hero from "../hero/Hero";
import Searchbar from "../search/Searchbar";
import Filter from "../search/Filter";
import { useState,useEffect } from "react";

const Home = ({flags})=>{
    
    const [filter,setFilter] = useState();
    const [filtered,setFiltered] = useState([]);
    useEffect(()=>{
        setFiltered(flags.filter(flag=>{
            return flag.name.common.match(new RegExp(filter, "i")) ;
        }));
    },[filter])
    return(
        <div>
            <Searchbar setFilter={setFilter}/>
            <Filter/>
            <Hero filter={filtered.length==0?flags:filtered} />
            
        </div>
        
    );
}
export default Home;
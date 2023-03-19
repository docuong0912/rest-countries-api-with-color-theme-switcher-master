import React from "react";
import Hero from "../hero/Hero";
import { useEffect } from "react";

const Home = ({flags})=>{
    
    return(
        <>
          
            <Hero flags ={flags} />
        </>
        
    );
}
export default Home;
import api from './api/axiosConfig'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import HeroDetail from './components/hero/HeroDetail';
import {Routes,Route} from 'react-router-dom';
import Home from './components/home/Home';
import FilterList from './components/FilterList/FilterList';
import "./fontawsome";
function App() {
  const [flag,setFlag] = useState([]);
  const [singleFlag,setSingleFlag] = useState([]);
  const [border,setBorder] = useState([]);
  const getFlags = async ()=> {
    try{
      const res = await api.get("/v3.1/all");
      
      setFlag(res.data);
      console.log(res.data);
     
    }catch(err){
      console.log(err);
    }
   
  }
  const getCountryDetail = async(name)=>{
    setBorder([]);
    try{
      const res = await api.get(`/v3.1/name/${name}?fullText=true`);
      setSingleFlag(res.data);
      res.data[0].borders?.map(async bcode=>{
        try{
          const border = await  api.get(`https://restcountries.com/v3.1/alpha/${bcode}`);
          setBorder(borders=>[...borders,border.data]);
        }catch(err){
          console.log(err);
        }
        
      })
      
    }catch(err){
        console.log(err);
    }
  }
  const filterByRegion =async(type)=>{
    try{
      const res = await api.get(`/v3.1/region/${type}`);
      setSingleFlag(res.data);
      
    }catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    getFlags();
  },[])
  return (
    <div className="App">
        <header>
                <h1>Where in the world ?</h1>
                <div className="theme">
                    <FontAwesomeIcon icon=" fa-moon" />
                    <p className="theme__type">
                        Dark mode
                    </p>
                </div>
        </header>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home flags={flag}/>}></Route>
          <Route path='/detail/:name' element={<HeroDetail border={border} getCountryDetail={getCountryDetail} singleFlag={singleFlag} />}></Route>
          <Route path = '/filter/:type' element = {<FilterList filterByRegion={filterByRegion}/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

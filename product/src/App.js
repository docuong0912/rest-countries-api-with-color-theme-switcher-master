import api from './api/axiosConfig'
import './App.css';

import { useState,useEffect } from 'react';
import Layout from './components/Layout';
import HeroDetail from './components/hero/HeroDetail';
import Hero from './components/hero/Hero';
import {Routes,Route,Navigate} from 'react-router-dom';
import Home from './components/home/Home';
import FilterList from './components/FilterList/FilterList';
import Header from './components/Header/Header';
import "./fontawsome";
function App() {
  const [darkMode,isDarkMode] = useState(false);
  const [flag,setFlag] = useState([]);
  const [singleFlag,setSingleFlag] = useState([]);
  const [border,setBorder] = useState([]);
  const getFlags = async ()=> {
    try{
      const res = await api.get("/v3.1/all");
      
      setFlag(res.data);

     
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
      setFlag(res.data);
      
    }catch(err){
        console.log(err);
    }
  }
  useEffect(()=>{
    getFlags();
  },[])
  return (
    <div className="App">
      <Header darkMode={darkMode} isDarkMode={isDarkMode}/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={`/countries`} element={<Home setFlag={setFlag} getFlags={getFlags} flags={flag}/>}>
              <Route path='all' element={<Hero />}/>
              <Route path = 'filter/:type' element = {<FilterList filterByRegion={filterByRegion}/>}/>
          </Route>
          <Route path="/" element={<Navigate to={`/countries/all`}  replace={true} />} />
          <Route path='/detail/:name' element={<HeroDetail border={border} getCountryDetail={getCountryDetail} singleFlag={singleFlag} />}></Route>
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
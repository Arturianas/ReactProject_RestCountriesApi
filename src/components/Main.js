import React from 'react';
//import Filter from '../Filter';
//import Header from './Header';
import { Routes, Route, Link } from "react-router-dom";
//import Country from './Country';
//import Hero from './Hero';
import Header from './Header';
import Hero from './Hero';
import Filter from './Filter';
import Country from './Country';



const Main = () => {
  console.log('Have a great day!')
  return (
    <div>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Hero/>} />
        </Routes>

        <Routes>
          <Route path="/" element={<Filter/>} />
          <Route path="/countries/:name" element={<Country/>} />
        </Routes>
    </div>
  )
};


export default Main;

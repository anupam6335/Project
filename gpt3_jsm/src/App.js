import React from 'react';
import './App.css';
import { Aritcle, Brand, CTA, Navbar, Feature } from './components'; 
import {Blog, Features, Footer, Possibility, WhatGPT3, Header  } from './containers'
const App = () => {
  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar/>
        {/* 1:06:08 */}
        <Header/> 
      </div> 
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import ControlledCarousel from './component/carousel';
import Clock from './component/clock';
import Footer from "./component/footer";

import ResponsiveAppBar from './component/header';
import './homepage.css';
export default function Homepage() {
  
  return (
      <div className='homepage' style={{position:'relative'}}>
     <ScrollToTop smooth />
      <Clock/>
   
    <ResponsiveAppBar style={{position:'relative'}}/>
    
    <ControlledCarousel/>
    <Outlet/>
       <Footer/>     
    </div>
  )
}

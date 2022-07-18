import React from 'react';
import ResponsiveAppBar from './component/header';
import Searchbar from './component/searchbar';
import Showbooks from './component/showbooks';
import './homepage.css';

export default function Homepage() {
  
  return (
      <div className='homepage' style={{position:'relative'}}>
      
    <ResponsiveAppBar/>
    <Searchbar/>
    <Showbooks/>
            
    </div>
  )
}

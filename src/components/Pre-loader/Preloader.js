import React from 'react'
import HashLoader from "react-spinners/HashLoader"


export default function Preloader() {
  return (
    <div style={{background:'#0F1724',width:'100vw',height:'100vh', display:'flex', justifyContent:'center',flexDirection:"column", alignItems:'center'}}>
       <div>
      <HashLoader color={'#1976D2'} loading={true}  size={60} />
      <h1 style={{color:'whitesmoke', fontSize:'20px'}}>Loading...</h1>
      </div>
    </div>
  )
}

import { Button, Grid } from "@mui/material";
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../../contexts/authContext';
export default function Clock() {
  const navigate=useNavigate();
    const [clock,setClock]=useState(moment().format('llll'));
    const {auth}=useAuth();
    useEffect(() => {
        const interval = setInterval(() => {
            setClock(moment().format('llll'));
        }, 1000);
        return () => clearInterval(interval);
      }, []);
  return (
    <Grid container direction='row' justifyContent='end' sx={{background:'#1A3156',textAlign:'end',color:'white',paddingRight:'10px',fontSize:"15px"}}>
      {!auth&&(<><Grid item> <Button size='small' onClick={()=>{navigate('/signup/')}}>Signup</Button></Grid>
      <Grid item> <Button size='small' onClick={()=>{navigate('/login/')}}>Login</Button></Grid></>)}
      <Grid item sx={{padding:'auto'}}> {clock}</Grid>
      
      </Grid>
  )
}

import Grid from "@mui/material/Grid";
import React from "react";
import Bookcard from "./bookcard";
export default function Showbooks() {
  return (
    <Grid container direction="row" sx={{marginTop:'150px',}}>
      <Grid item xs={0} md={1} />
      <Grid item container spacing={1} xs={12} md={10} direction="row" justifyContent='center' sx={{ backgroundColor:'white', margin:0, flexWrap:'wrap'}} >
        <Bookcard />
        <Bookcard /> 
        <Bookcard />
         <Bookcard /> 
         <Bookcard />
          <Bookcard />
        <Bookcard /> 
        <Bookcard />
         <Bookcard />
          <Bookcard />
      </Grid>
      <Grid item xs={0} md={1} />
    </Grid>
  );
}

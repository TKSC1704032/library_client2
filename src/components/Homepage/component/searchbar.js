import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import classes from '../../../style/searchbar.module.css';

export default function Searchbar() {
  

  return (
      
      <Box >
        <Grid container spacing={0} direction="column" >
            <Grid item ><h1 className={classes.text}>Search Your Needed books</h1></Grid>
            <Grid container item direction="row">
                <Grid item xs={1} md={2}/>
                <Grid item xs={10} md={8} className={classes.searchContainer}>
                <input className={classes.search} type="search" id="search"  placeholder='Search...'/>
          <Button className={classes.button} variant="contained" endIcon={<SearchIcon/>}/>

        </Grid>
        <Grid item xs={1} md={2}/>
        </Grid>
      </Grid>
      </Box>
    
  );
}
import { Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Confirmationpage from "./confirmationpage";
import Studentsignup from "./studentsignup";

export default function Loginpage() {
  const [acctype, setAcctype] = React.useState('std');
  const [value, setValue] = React.useState("login");
  const handleChange = (event, newValue) => setValue(newValue);
  const [sendcode, setSendcode] = React.useState(false);
 
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Online Library Management System
            </Typography>
            <Button  variant="contained" color={acctype==='std'?'secondary':'primary'} onClick={()=>setAcctype('std')}  >
              Student
            </Button>
            <Button variant="contained" color={acctype==='ad'?'secondary':'primary'} onClick={()=>{
             setAcctype('ad');}} >
              Admin
            </Button>
            
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={1} direction="row"  sx={{width:"100vw", minHeight:"500px", marginTop:'auto',marginBottom:'auto',}} justifyContent="center" >
        <Grid item xs={0} md={1} />
        {!sendcode&&(<Grid item xs={12} md={3} alignSelf='center' >
          <img src= {value==='login' ?process.env.PUBLIC_URL + `/Image/login.png`:process.env.PUBLIC_URL + `/Image/signup.png`} alt="" style={{width:"100%",}} />
        </Grid>)}
        <Grid item xs={12} md={7} alignSelf='center'>
        {sendcode?(<Confirmationpage setSendcode={setSendcode}/>):(<Studentsignup
            value={value}
            handleChange={handleChange}
            acctype={acctype} 
            setSendcode={setSendcode}
          />)}
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </>
  );
}

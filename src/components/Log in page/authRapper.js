import { Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function AuthRapper(props) {
 
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Online Library Management System
            </Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={1} direction="row"  sx={{width:"100vw", minHeight:"500px", marginTop:'auto',marginBottom:'auto',}} justifyContent="center" >
        <Grid item xs={0} md={1} />
        {!props.sendCode&&(<Grid item xs={12} md={3} alignSelf='center' >
          <img src= {process.env.PUBLIC_URL + `/Image/signup.png`} alt="" style={{width:"100%",}} />
        </Grid>)}
        <Grid item xs={12} md={7} alignSelf='center'>
        {props.children}
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </>
  );
}

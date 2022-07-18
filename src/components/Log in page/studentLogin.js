import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, IconButton, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import classes from "../../style/loginpage.module.css";
export default function StudentLogin () {
 let navigate = useNavigate();
 const {login}=useAuth();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [verified, setVerified] = React.useState(false);
  const [message, setMessage] = React.useState({
    warning: null,
    error: null,
    success: null,
  });
  const [details, setDetails] = React.useState({
    email: '',
    password: '',
  });

  const updateDetails = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]:e.target.value,
      };
    });
  };
  return (
    <Box p={5} component="body" className={classes.box}>
      <Typography className={classes.title} color="secondary" variant="h4">
        Student Login Page!!
      </Typography>
      <Paper sx={{ width: "100%" ,padding:"10px"}} >
      
      <Grid container>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                console.log(details);
                const data= await login(details);
                console.log(data);
                if(data.status==='success'){
                
                  // navigate('/');
                }
                
              }} >
              <div>
                <TextField
                  id="email"
                  name="email"
                  label="Email:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.email}
                  required
                  onChange={updateDetails}
                />
              </div>
              <div>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={details.password}
                    onChange={updateDetails}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </div>
              <br/>
              <div>
                  <Button type="submit" variant="contained" color="secondary">Log In</Button>
              </div>
            </form>
            <Link to='/login/forget-password/' style={{color:'blue'}}>Forgotten password? </Link>
          
            <p>Don't have an account? 
            <Link style={{color:'red'}} to='/signup'>Register here</Link>
            </p>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      </Paper>
    </Box>
  );
}

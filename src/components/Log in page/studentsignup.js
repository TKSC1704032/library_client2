import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, IconButton, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import classes from "../../style/loginpage.module.css";

export default function Studentsignup() {
  const {signup}=useAuth();

  let navigate = useNavigate();
  const dept = [
    "EEE",
    "CSE",
    "ETE",
    "ECE",
    "ME",
    "MTE",
    "GCE",
    "CFPE",
    "MSE",
    "IPE",
    "CE",
    "BECM",
    "Arch",
    "URP",
  ];
  const [showPassword, setShowPassword] =useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState({
    warning: null,
    error: null,
    success: null,
  });
  const [details, setDetails] = useState({
    fname: null,
    lname: null,
    roll: null,
    series:null,
    dept: null,
    email: null,
    password: null,
  });

  const updateDetails = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "dept" ? dept[e.target.value - 1] : e.target.value,
      };
    });
  };


 
  return (
    <Box p={5} component="body" className={classes.box}>
      <Typography className={classes.title} color="secondary" variant="h4">
        Please submit your details to register!!
      </Typography>
      <Paper sx={{ width: "100%" ,padding:"10px"}} >
      
      <Grid container>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
            <form
              onSubmit={async(e) => {
                e.preventDefault();
                const data= await signup(details);
                if (data.status==='success'){
                  var decoded = jwt_decode(data.VarifyToken);
 
                  console.log(decoded);
                  navigate('/verify',{state:{userID:decoded.userID}})
                }
                console.log(data);
              
              }}
            >
                  <div>
                    <TextField
                      id="fname"
                      name="fname"
                      label="First Name:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.fname}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="lname"
                      name="lname"
                      label="Last Name:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.lname}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="roll"
                      name="roll"
                      label="Roll No:"
                      fullWidth
                      margin="normal"
                      value={details.roll}
                      variant="outlined"
                      required
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="series"
                      name="series"
                      label="Series:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.series}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <FormControl fullWidth>
                      <InputLabel htmlFor="department">Department</InputLabel>
                      <Select
                        defaultValue=""
                        id="department"
                        name="dept"
                        label="Department"
                        required
                        onChange={updateDetails}
                      >
                        {dept.map((val, ind) => {
                          return <MenuItem value={ind + 1}>{val}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </div>
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
                  <Button type="submit" variant="contained" color="secondary">
                    Continue
                  </Button>
              </div>
            </form>
            <p>Already have an account? 
            <Link style={{color:'red'}} to='/login'>login here</Link>
            </p>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      </Paper>
    </Box>
  );
}

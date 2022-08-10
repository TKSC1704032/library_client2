import CloseIcon from '@mui/icons-material/Close';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid, IconButton, Paper, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import classes from "../../style/loginpage.module.css";

export default function Studentsignup() {
  const { signup } = useAuth();

  let navigate = useNavigate();
  const dept = [
    "CE",
    "EEE",
    "ME",
    "CSE",
    "ETE",
    "IPE",
    "GCE",
    "URP",
    "MTE",
    "Arch",
    "ECE",
    "CFPE",
    "BECM",
    "MSE",
  ];

  const namePattern = /^[A-Za-z\s]+$/;
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  const rollPattern =
    /^((16)|(17)|(18)|(19)|(20))((([0][0-3])([0][0][1-9]|[0][1-9][0-9]|[1][0-7][0-9]|(180)))|((([0][4-8])|(10)|(13))([0][0][1-9]|[0][1-5][0-9]|(060)))|(((09)|(11)|(12))([0][0][1-9]|[0][1-2][0-9]|(030))))$/;
  const seriesPattern = /^((16)|(17)|(18)|(19)|(20)){1}$/;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prev) => {
      return !prev;
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [info, setInfo] = useState({status:'',message:''});
  const [message, setMessage] = useState({
    fname: "",
    lname: "",
    roll: "",
    series: "",
    dept: "",
    email: "",
    password: "",
  });

  const [details, setDetails] = useState({
    fname: '',
    lname: '',
    roll: '',
    series: '',
    dept: '',
    email: '',
    password: '',
  });
  const handleFnameValidation=()=>{
    if (!namePattern.test(details.fname)) {
        setMessage((prev) => {
          return {
            ...prev,
            fname:
              "First name will not support any special character or digit. Please correct it.",
          };
        });
      } else {
        setMessage((prev) => {
          return { ...prev, fname: "" };
        });
      }
  }


  const handleLnameValidation=()=>{
    if (!namePattern.test(details.lname)) {
        setMessage((prev) => {
          return {
            ...prev,
            lname:
              "Last name will not support any special character or digit. Please correct it.",
          };
        });
      } else {
        setMessage((prev) => {
          return { ...prev, lname: "" };
        });
      }
  }



  const handlerollValidation=()=>{
    if(details.roll===''){
      setMessage((prev) => {
        return { ...prev, roll: "" };
      });
    }
  else if(!rollPattern.test(details.roll)){
        setMessage((prev)=>{
          return {...prev,roll:'Invalid roll number. Please correct it.'}
        })

        
        
      }
      
      else{setMessage((prev)=>{
        return {...prev,roll:''}})
       
        if(details.series!==''){

          if (seriesPattern.test(details.series)) {
            const r = Number(details.roll) / 100000;
                if (Math.floor(r) !== Number(details.series)) {
                  setMessage((prev) => {
                    return {
                      ...prev,
                      series: "Roll number and series does not match.",
                    };
                  });
                } else {
                  setMessage((prev) => {
                    return { ...prev, series: "" };
                  });
                }

          }

        }
    
        if (details.dept!=='') {
            const d = Number(details.roll) / 1000;
            const dc = Math.floor(d) % 100;
      
            if (dept[dc] === details.dept) {
              setMessage((prev) => {
                return { ...prev, dept: "" };
              });
            } else {
              setMessage((prev) => {
                return {
                  ...prev,
                  dept: "Roll and department does not match.Please correct it.",
                };
              });
            }
          } 
    
    }

  }

  const handleSeriesValidation=()=>{
    if(details.series===''){
      setMessage((prev) => {
        return { ...prev, series: "" };
      });
    }
    else if (seriesPattern.test(details.series)) {
      if (rollPattern.test(details.roll)) {
        const r = Number(details.roll) / 100000;
        if (Math.floor(r) !== Number(details.series)) {
          setMessage((prev) => {
            return {
              ...prev,
              series: "Roll number and series does not match.",
            };
          });
        } else {
          setMessage((prev) => {
            return { ...prev, series: "" };
          });
        }
      } else {
        setMessage((prev) => {
          return { ...prev, series: "" };
        });
      }
    } else {
      setMessage((prev) => {
        return { ...prev, series: "Invalid Series. Please correct it." };
      });
    }
  }

  const handleDeptValidation=()=>{
    if(details.dept===''){
      setMessage((prev) => {
        return { ...prev, dept: "" };
      });
    }
  else if (rollPattern.test(details.roll)) {
      const d = Number(details.roll) / 1000;
      const dc = Math.floor(d) % 100;

      if (dept[dc] === details.dept) {
        setMessage((prev) => {
          return { ...prev, dept: "" };
        });
      } else {
        setMessage((prev) => {
          return {
            ...prev,
            dept: "Roll and department does not match.Please correct it.",
          };
        });
      }
    } else {
      setMessage((prev) => {
        return { ...prev, dept: "" };
      });
    }
  }

  const handleEmailValidation=()=>{
    if (details.email===''){
      setMessage((prev) => {
        return { ...prev, email: "" };
      });
    }

    else if (!emailPattern.test(details.email)) {
      setMessage((prev) => {
        return { ...prev, email: "Invalid email. Please correct it." };
      });
    } else {
      setMessage((prev) => {
        return { ...prev, email: "" };
      });
    }

  }
  const handlePasswordValidation = ()=>{

    if (details.password===''){
      setMessage((prev) => {
        return { ...prev, password: "" };
      });
    }

    if (!passwordPattern.test(details.password)) {
       setMessage((prev) => {
         return {
           ...prev,
           password:
             "Password should contain atleast 1 uppercase and 1 lowercase and 1 digit. And minimum length should be 8.",
         };
       });
     } else {
       setMessage((prev) => {
         return { ...prev, password: "" };
       });
     }
   }


  const updateDetails = (e) => {
    setDetails((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.name === "dept" ? dept[e.target.value - 1] : e.target.value.trim(),
      };
    });
  
  };

  return (
    <Box p={5} component="body" className={classes.box} >
      <Typography className={classes.title} color="secondary" variant="h4">
        Please submit your details to register!!
      </Typography>
      <Paper sx={{ width: "100%", padding: "10px" }}>
        <Grid container>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                
                if (
                  message.fname == "" &&
                  message.lname == "" &&
                  message.roll == "" &&
                  message.series == "" &&
                  message.dept == "" &&
                  message.email == "" &&
                  message.password == ""
                ){
                  const data = await signup(details);
                  setInfo({status:data.status,message:data.message});
                  if (data.status === "success") {
                    var decoded = jwt_decode(data.VarifyToken);
                    setInfo({status:'',message:''});
                    console.log(decoded);
                    navigate("/verify", { state: { userID: decoded.userID } });
                  }
                  console.log(data);
                }
              }}
            >
              <div>
                <TextField
                  onBlur={handleFnameValidation}
                  
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
                {message.fname !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.fname}
                  </p>
                ) : <></>}
              </div>
              <div>
                <TextField
                  onBlur={handleLnameValidation}
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
                {message.lname !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.lname}
                  </p>
                ) : <></>}
              </div>
              <div>
                <TextField
                  onBlur={handlerollValidation}
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
                {message.roll !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.roll}
                  </p>
                ) : <></>}
              </div>
              <div>
                <TextField
                  onBlur={handleSeriesValidation}
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
                {message.series !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.series}
                  </p>
                ) : <></>}
              </div>
              <div>
                <FormControl fullWidth>
                  <InputLabel htmlFor="department">Department</InputLabel>
                  <Select
                    onBlur={handleDeptValidation}
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
                {message.dept !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.dept}
                  </p>
                ) : <></>}
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
                  onChange={(e)=>{
                    updateDetails(e);
                    handleEmailValidation();
                  }
                    }
                    onBlur= {handleEmailValidation}

                  autoComplete="off"
                />

                {message.email !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.email}
                  </p>
                ) : <></>}
              </div>
              <div>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    autoComplete="off"

                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={details.password}
                    onChange={(e)=>{
                      updateDetails(e);
                      handlePasswordValidation();

                    }}
                    onBlur={handlePasswordValidation}
                  

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
                {message.password !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.password}
                  </p>
                ) : <></>}
              </div>
              <br />
              <div>
                <Button type="submit" variant="contained" color="secondary">
                  Continue
                </Button>

                
              </div>
            </form>
            <p>
              Already have an account?
              <Link style={{ color: "red" }} to="/login">
                login here
              </Link>
            </p>
          </Grid>
          <Grid item xs={false} md={2} />
        </Grid>
        
      </Paper>

      {info.status!==''? (<Box sx={{ width: '60%',position:'fixed',left:'20px',bottom:'10px'}}>

        <Alert
        
        severity={info.status==='failed'?"error":"success"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setInfo({status:'',message:''});
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        > <AlertTitle>Registration {info.status}</AlertTitle>

          {info.message}
        </Alert>
      
    </Box>):<></>}
    </Box>
  );
}

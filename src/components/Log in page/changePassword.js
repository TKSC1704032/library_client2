import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { Alert, AlertTitle, Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';

export default function ChangePasswordPage() {
  const {id ,token}=useParams();
    const {userPasswordReset } =useAuth();
    const [loading, setLoading] = useState(false);
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
    new_password:'',password_confirmation:''
  });

  const handleNewPasswordValidation = ()=>{

    if (details.new_password===''){
      setMessage((prev) => {
        return { ...prev, new_password: "" };
      });
    }

    if (!passwordPattern.test(details.new_password)) {
       setMessage((prev) => {
         return {
           ...prev,
           new_password:
             "Password should contain atleast 1 uppercase and 1 lowercase and 1 digit. And minimum length should be 8.",
         };
       });
     } else {
       setMessage((prev) => {
         return { ...prev, new_password: "" };
       });
     }
   }


   const handleConfirmPasswordValidation = ()=>{

    if (details.password_confirmation===''){
      setMessage((prev) => {
        return { ...prev, password_confirmation: "" };
      });
    }

    if (!passwordPattern.test(details.password_confirmation)) {
       setMessage((prev) => {
         return {
           ...prev,
           password_confirmation:
             "Password should contain atleast 1 uppercase and 1 lowercase and 1 digit. And minimum length should be 8.",
         };
       });
     } else {
       setMessage((prev) => {
         return { ...prev, password_confirmation: "" };
       });
     }
   }

  const navigate = useNavigate();
  const [details,setDetails]= React.useState({new_password:'',password_confirmation:''});
 const onHandleChange=(e)=>{
    setDetails((prev)=>{
       return {...prev,[e.target.name]:e.target.value.trim()}
    })
 }  
  return (
      <Paper elevation={24} sx={{padding:'15px'}} >
    <Grid container xs={12} direction="column">
     <Grid item>
     <Typography variant="h5">Change your password</Typography>
     
     </Grid>
     
     <Grid item>
       <br/>
     <div>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="new_password">New password:</InputLabel>
                  <OutlinedInput
                    autoComplete="off"

                    id="new_password"
                  name="new_password"
                  label="New password:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.new_password}
                  required
                  onChange={onHandleChange}
                    type={showPassword ? "text" : "password"}
                    onBlur={handleNewPasswordValidation}
                  

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
                  />
                </FormControl>
                {message.new_password !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.new_password}
                  </p>
                ) : <></>}
              </div>

             <br/>
              <div>
                <FormControl fullWidth variant="outlined">
                  <InputLabel htmlFor="password_confirmation">Confirm password:</InputLabel>
                  <OutlinedInput
                    autoComplete="off"

                    id="password_confirmation"
                  name="password_confirmation"
                  label="Confirm password:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.password_confirmation}
                  required
                  onChange={onHandleChange}
                    type={showPassword ? "text" : "password"}
                    onBlur={handleConfirmPasswordValidation}
                  

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
                  />
                </FormControl>
                {message.password_confirmation !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message.password_confirmation}
                  </p>
                ) : <></>}
              </div>
              <br/>




     </Grid>
     <Grid item> 
        
         <br/>
     </Grid>
     <Grid item alignSelf='end'>
     <Button size="small" variant="contained" sx={{marginRight:'5px'}} onClick={()=>{navigate('/login/');}}>Cancel</Button>
     
     <LoadingButton
                 sx={{marginRight:"20px"}}
                  type="button"
                  size="small"
                  
                  loading={loading}
                  loadingPosition="end"
                  color='success'variant="contained"
                  onClick={async()=>{
                    
                    setLoading(true);
                    if(message.new_password===''&&message.password_confirmation===''){


                      const data=await userPasswordReset(id,token,details);
                     if(data){
                      setInfo({status:data.status,message:data.message});

                      setLoading(false);
                      if(data.status==='success'){
                        navigate('/login/')
                       }
                     }
                     console.log(data);  
                    }
                    
                   }}>Change password</LoadingButton>

     </Grid>
    </Grid>
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
> <AlertTitle>Change password {info.status}</AlertTitle>

  {info.message}
</Alert>

</Box>):<></>}
    </Paper>
  )
}

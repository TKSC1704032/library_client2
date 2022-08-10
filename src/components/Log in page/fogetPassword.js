import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from '@mui/lab';
import { Alert, AlertTitle, Button, Divider, Grid, IconButton, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
export default function ForgetPasswordPage() {
  const { sendUserPasswordResetEmail} =useAuth();
  const navigate = useNavigate();
  const [email,setEmail]= useState();
  const [message,setMessage]=useState('');
  const [loading, setLoading] = useState(false);
 const [info, setInfo] = useState({status:'',message:''});

  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const handleEmailValidation=()=>{
    if (email===''){
      setMessage("");
    }

    else if (!emailPattern.test(email)) {
      setMessage("Invalid email. Please correct it.");
    } else {
      setMessage("");
    }

  }
  
  return (
      <Paper elevation={24} sx={{padding:'15px'}}>
    <Grid container xs={12} direction="column">
     <Grid item>
     <Typography variant="h5">Enter your email:</Typography>
     <Divider variant="inset" component="div" />
     <p>Let us know that this email address belongs to you. And we will sent you an email with a link to reset your password.</p>
     </Grid>
    
     <Grid item>
     <div>
     <TextField
                  id="email"
                  name="email"
                  label="Email:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={email}
                  required
                  onChange={(e)=>{setEmail((prev)=>{return e.target.value.trim() });
                  handleEmailValidation();}}
                  onBlur={handleEmailValidation}

                />
                {message !== "" ? (
                  <p style={{ color: "red", fontSize: "12px" }}>
                    {message}
                  </p>
                ) : <></>}
              </div>
     </Grid>
     <Grid item> 
     <Button size="small">Send Email Again</Button>
     <br/>
         <Divider variant="inset" component="div" />

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
                    if(message===''){
                     const data =await sendUserPasswordResetEmail({email});
                     if(data){
                      setInfo({status:data.status,message:data.message});

                      setLoading(false);
                     }
                     console.log(data);  
                    }
                    
                   }}>Send Email</LoadingButton>
     
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
> <AlertTitle>Sending Email {info.status}</AlertTitle>

  {info.message}
</Alert>

</Box>):<></>}
    </Paper>
  )
}

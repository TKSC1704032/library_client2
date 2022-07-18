import { Button, Divider, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
export default function ForgetPasswordPage() {
  const { sendUserPasswordResetEmail} =useAuth();
  const navigate = useNavigate();
  const [email,setEmail]= React.useState();

  
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
                  onChange={(e)=>{setEmail((prev)=>{return e.target.value })}}
                />
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
     <Button size="small" variant="contained" color="success" onClick={async()=>{ console.log(email);
     const data =await sendUserPasswordResetEmail({email});
     console.log(data);  
    }}
     >Continue</Button>
     </Grid>
    </Grid>
    </Paper>
  )
}

import { Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
export default function ChangePasswordPage() {
  const {id ,token}=useParams();
    const {userPasswordReset } =useAuth();
  const navigate = useNavigate();
  const [details,setDetails]= React.useState({new_password:'',password_confirmation:''});
 const onHandleChange=(e)=>{
    setDetails((prev)=>{
       return {...prev,[e.target.name]:e.target.value}
    })
 }  
  return (
      <Paper elevation={24} sx={{padding:'15px'}}>
    <Grid container xs={12} direction="column">
     <Grid item>
     <Typography variant="h5">Change your password</Typography>
     
     </Grid>
     
     <Grid item>
     <div>
     <TextField
                  id="new_password"
                  name="new_password"
                  label="New password:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.new_password}
                  required
                  onChange={onHandleChange}
                />
              </div>

              <div>
     <TextField
                  id="password_confirmation"
                  name="password_confirmation"
                  label="Confirm password"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.password_confirmation}
                  required
                  onChange={onHandleChange}
                />
              </div>

     </Grid>
     <Grid item> 
        
         <br/>
     </Grid>
     <Grid item alignSelf='end'>
     <Button size="small" variant="contained" sx={{marginRight:'5px'}} onClick={()=>{navigate('/login/');}}>Cancel</Button>
     <Button size="small" variant="contained" color="success" onClick={async()=>{ console.log(details);
     const data=await userPasswordReset(id,token,details);
     if(data.status==='success'){
      navigate('/login/')
     }
    }}
     >Change password</Button>
     </Grid>
    </Grid>
    </Paper>
  )
}

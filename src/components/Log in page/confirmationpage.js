import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
export default function Confirmationpage(props) {
  const { registerVerify} =useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [userID,setUserID]=React.useState(location.state.userID)
  const [token,setToken]= React.useState();
  return (
      <Paper elevation={24} sx={{padding:'15px'}}>
    <Grid container xs={12} direction="column">
     <Grid item>
     <Typography variant="h5">Enter the code from your email</Typography>
     <Divider variant="inset" component="div" />
     <p>Let us know that this email address belongs to you. Enter the code from the email sent to argvewgte@gmail.com.</p>
     </Grid>
     
     <Grid item>
     <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <OutlinedInput
            id="token"
            name="token"
            value={token}
            onChange={(e)=>{setToken(prev=> e.target.value);}}
            startAdornment={<InputAdornment position="start">lib-</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />
        </FormControl>
     </Grid>
     <Grid item> 
     <Button size="small">Send Email Again</Button>
     <br/>
         <Divider variant="inset" component="div" />

         <br/>
     </Grid>
     <Grid item alignSelf='end'>
     <Button size="small" variant="contained" sx={{marginRight:'5px'}} onClick={()=>{props.setSendcode(false)}}>Update Info</Button>
     <Button size="small" variant="contained" color="success" onClick={async()=>{ console.log(userID,"----",token);
     const data= await registerVerify({id:userID,token:token});
     console.log(data);
    }}
     >Continue</Button>
     </Grid>
    </Grid>
    </Paper>
  )
}

import { Grid, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
export default function AddFine() {
  let navigate = useNavigate();
  
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
    name: null,
    roll: null,
    fine: null,
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
    <Box p={5} component="body">
      <Typography  color="secondary" variant="h4">
        Fine of the delay in reissue the books
      </Typography>
      <Paper sx={{ width: "100%" ,padding:"10px"}} >
      
      <Grid container>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(details);
              }}
            >
                  <div>
                    <TextField
                      id="name"
                      name="name"
                      label="Name of Student:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.name}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="roll"
                      name="roll"
                      label="Roll:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.roll}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="fine"
                      name="fine"
                      label="Total Amount of Fine:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.fine}
                      onChange={updateDetails}
                    />
                  </div>
                  
              <br/>
              <div>
                  <Button type="submit" variant="contained" color="secondary">
                    Submit
                  </Button>
              </div>
            </form>

        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
      </Paper>
    </Box>
  );
}

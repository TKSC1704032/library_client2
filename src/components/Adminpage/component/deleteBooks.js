import { Grid, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
export default function DeleteBooks() {
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
    author: null,
    edition: null,
    bookid: null,
    numberofbooks: null,
    typeofbook: null,
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
        Delete Books
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
                      label="Name of Books:"
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
                      id="author"
                      name="author"
                      label="Author:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.author}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="edition"
                      name="edition"
                      label="Edition:"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      required
                      value={details.edition}
                      onChange={updateDetails}
                    />
                  </div>
                  <div>
                    <TextField
                      id="bookid"
                      name="bookid"
                      label="Book Id:"
                      fullWidth
                      margin="normal"
                      value={details.bookid}
                      variant="outlined"
                      required
                      onChange={updateDetails}
                    />
                  </div>
                  
              <div>
                <TextField
                  id="numberofbooks"
                  name="numberofbooks"
                  label="Number of books:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.numberofbooks}
                  required
                  onChange={updateDetails}
                />
              </div>
              <div>
                <TextField
                  id="typeofbook"
                  name="typeofbook"
                  label="Type of book:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.typeofbook}
                  required
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

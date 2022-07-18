import SendIcon from '@mui/icons-material/Send';
import { Card, Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import * as React from "react";
import classes from "../../../style/loginpage.module.css";

export default function Contract() {
  return (
    <Box p={5} component="body" className={classes.box}>
      <Typography className={classes.title} color="secondary" variant="h4">
        Contract Form
      </Typography>
      <Grid container>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
          <Card className={classes.card}>
            <form>
              <div>
                <TextField
                  id="fname"
                  name="fname"
                  label="Full Name:"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
              <div>
                <TextField
                  id="lname"
                  name="lname"
                  label="Email:"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
              <div>
                <TextField
                  id="roll"
                  name="roll"
                  label="Subject:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  required
                />
              </div>

              <div>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={6}
                  placeholder="Write your message..."
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <Button type="submit" variant="contained" color="secondary" endIcon={<SendIcon/>}>
                  Send
                </Button>
              </div>
            </form>
          </Card>
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
    </Box>
  );
}

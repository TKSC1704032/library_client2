import emailjs from '@emailjs/browser';
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from "@mui/lab/LoadingButton";
import { Alert, AlertTitle, Card, Grid, IconButton, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import classes from "../../../style/loginpage.module.css";

export default function Contract() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({ status: "", message: "" });

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();


    emailjs.sendForm('service_wov7iwl', 'template_77gaaqk', form.current, 'PEtY8uLm6BOlOaEc_')
      .then((result) => {
        setInfo({status: "success", message: "Send Email Successfully"});
        setLoading(false);
     
          console.log(result.text);
      }, (error) => {
        setInfo({status: "failed", message: "Can't Send Email."})
        setLoading(false);

          console.log(error.text);
      });
  };

  return (
    <Box p={5} component="body" className={classes.box}>
      <Typography className={classes.title} color="secondary" variant="h4">
        Contract Form
      </Typography>
      <Grid container>
        <Grid item xs={false} md={2} />
        <Grid item xs={12} md={8}>
          <Card className={classes.card}>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <TextField 
                  id="user_name"
                  type="text" name="user_name"
                  label="Full Name:"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>
              <div>
                <TextField
                  id="user_email"
                  type="email" name="user_email" 
                  label="Email:"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  required
                />
              </div>


              
              

              <div>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={6}
                  id="message"
                  name="message"
                  placeholder="Write your message..."
                  style={{ width: "100%" }}
                />
              </div>
              <div>

              <LoadingButton
                sx={{ marginRight: "20px" }}
                type="submit"
                size="small"
                loading={loading}
                loadingPosition="end"
                color="secondary"
                variant="contained"
                endIcon={<SendIcon/>}
              >
                Send Message
              </LoadingButton>


                
              </div>
            </form>
          </Card>
        </Grid>
        <Grid item xs={false} md={2} />
        {info.status !== "" ? (
        <Box
          sx={{ width: "60%", position: "fixed", left: "20px", bottom: "10px" }}
        >
          <Alert
            severity={info.status === "failed" ? "error" : "success"}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setInfo({ status: "", message: "" });
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            
            <AlertTitle>{info.status}</AlertTitle>
            {info.message}
          </Alert>
        </Box>
      ) : (
        <></>
      )}
      </Grid>
    </Box>
  );
}

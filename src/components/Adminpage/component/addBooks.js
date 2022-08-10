import CloseIcon from '@mui/icons-material/Close';
import UploadIcon from "@mui/icons-material/Upload";
import LoadingButton from '@mui/lab/LoadingButton';
import { Grid, IconButton, Paper, TextField } from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAdmin } from "../../../contexts/adminContext";

export default function AddBooks() {
  let navigate = useNavigate();
  const { uploadBook } = useAdmin();

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [loading, setLoading] = React.useState(false);
  const [details, setDetails] = React.useState({
    name: "",
    author: "",
    edition: "",
    book_id: "",
    number_of_books: "",
    tag_of_book: "",
    semester:"",
    book_cover: "",
    book_pdf: "",
  });
  const [info, setInfo] = React.useState({status:'',message:''});

  const updateDetails = (e) => {
    setDetails((prev) => {
      if (e.target.name === "book_cover" || e.target.name === "book_pdf") {
        return {
          ...prev,
          [e.target.name]: e.target.files[0],
        };
      } else {
        return {
          ...prev,
          [e.target.name]: e.target.value.trim(),
        };
      }
    });
  };
  return (
    <Box p={5} component="body">
      <Typography color="secondary" variant="h4">
        Add Books Information
      </Typography>
      <Paper sx={{ width: "100%", padding: "10px" }}>
        <Grid container>
          <Grid item xs={false} md={2} />
          <Grid item xs={12} md={8}>
            <form
              onSubmit={async (e) => {
                setLoading(true);
                e.preventDefault();
                // console.log(details);
                const data = await uploadBook(details);
                setInfo({status:data.status,message:data.message});
                console.log(data);
                if (data) {
                  setLoading(false);
                }
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
                  id="book_id"
                  name="book_id"
                  label="Book Id:"
                  fullWidth
                  margin="normal"
                  value={details.book_id}
                  variant="outlined"
                  required
                  onChange={updateDetails}
                />
              </div>

              <div>
                <TextField
                  id="number_of_books"
                  name="number_of_books"
                  label="Number of books:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.number_of_books}
                  required
                  onChange={updateDetails}
                />
              </div>
              <div>
                <TextField
                  id="tag_of_book"
                  name="tag_of_book"
                  label="Tag of book:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.tag_of_book}
                  required
                  onChange={updateDetails}
                />
              </div>
              <div>
              <TextField
                  id="semester"
                  name="semester"
                  label="For which semester this book will be required:"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  value={details.semester}
                  required
                  onChange={updateDetails}
                />
              </div>
              <div>
               
                  <label htmlFor='book_cover' style={{display:'block'}}>Upload books Cover Photo:</label>
                  

                  <input
                    
                    accept="image/*"
                    type="file"
                    name="book_cover"
                    id="book_cover"
                    required
                    placeholder='Upload books Cover Photo'
                    onChange={updateDetails}
                  />
                  <br/>
              </div>
              <div>
                
              <label htmlFor='book_pdf' style={{display:'block'}}>Upload books pdf:</label>
              
                  <input
                    
                    accept="application/pdf"
                    type="file"
                    name="book_pdf"
                    id='book_pdf'
                    required 
                    placeholder='Upload books pdf'
                    onChange={updateDetails}
                  />
                  <br/>
                
              </div>

              <br />
              <div>

                <LoadingButton
                  type="submit"
                  size="small"
                  endIcon={<UploadIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  Add Book
                </LoadingButton>

                {/* <Button type="submit" variant="contained" color="secondary">
                  Submit
                </Button> */}
              </div>
            </form>
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
> <AlertTitle>Uploading {info.status}</AlertTitle>

  {info.message}
</Alert>

</Box>):<></>}
    </Box>
  );
}

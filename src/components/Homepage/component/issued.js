import { Box, Divider, Grid, Paper } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useAuth } from '../../../contexts/authContext';

export default function Issued() {
  const {currentUser}=useAuth();
  const issuedBooks= currentUser.issuedBooks;
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={0} md={2} />
      <Grid item xs={12} md={8} >
      <Paper sx={{ width: '100%', }} elevation={24}>
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h4">Yours current issued books lists</Typography>
     
    </Box>
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
       {issuedBooks.length===0?<h2 style={{textAlign:"center"}}>No Issued Book</h2>:
       issuedBooks.length&&issuedBooks.map((issuedBook,index) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <><ListItem
            key={labelId}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <img style={{width:'40px',padding:'5px', marginRight:'30px' ,fontSize:'10px'}}
                  alt={`${issuedBook.bookName}`}
                  src={`https://drive.google.com/uc?export=view&id=${issuedBook.bookCoverId}`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={issuedBook.bookName} secondary={`by ${issuedBook.bookAuthor}`}/>
              <p>{!issuedBook.request_accepted?"request pending":`Expiration date:${issuedBook.expiration_date}`}</p>

            </ListItemButton>
          </ListItem>
          <Divider/>
          </>
        );
      })}
    </List>
        </Paper>
      </Grid>
      <Grid item xs={0} md={2} />
    </Grid>
  )
}

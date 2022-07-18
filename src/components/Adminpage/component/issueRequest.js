import BeenhereIcon from '@mui/icons-material/Beenhere';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Button, Divider, Grid, Paper } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import * as React from "react";
export default function IssueRequest() {
    const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={0} md={2} />
      <Grid item xs={12} md={8} >
      <Paper sx={{ width: '100%', }} elevation={24}>
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h4">Issue Requests for Books</Typography>
      <Button>Select all</Button>
    </Box>
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <><ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={process.env.PUBLIC_URL + '/Image/book1.jpg'}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary=' Learning React: Functional Web Development with React and Redux' 
              secondary={
              <>
              <Typography
              sx={{ display: "block" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              'by Alex Banks (Goodreads Author), Eve Porcello'
            </Typography>
            <h4>Name:Tusher Kumar Saha , Roll:1704032 , Series:17 , Previous Borrow:02, Expired:01</h4></>}
            />
              
            </ListItemButton>
          </ListItem>
          <Divider/>
          </>
        );
      })}
    </List>
        <Box sx={{ p: 2, border: '1px dashed grey' }}>
      <Button variant="outlined" startIcon={<BeenhereIcon/>}>Accept selected Request</Button>
      <Button variant="outlined" startIcon={<ClearIcon/>}>Reject selected Request</Button>
    </Box>
        </Paper>
      </Grid>
      <Grid item xs={0} md={2} />
    </Grid>
  )
}

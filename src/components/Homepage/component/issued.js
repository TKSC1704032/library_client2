import { Box, Divider, Grid, Paper } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from "@mui/material/Typography";
import * as React from "react";
export default function Issued() {
    
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={0} md={2} />
      <Grid item xs={12} md={8} >
      <Paper sx={{ width: '100%', }} elevation={24}>
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h4">Yours current issued books lists</Typography>
     
    </Box>
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <><ListItem
            key={value}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={process.env.PUBLIC_URL + '/Image/book1.jpg'}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary=' Learning React: Functional Web Development with React and Redux' secondary='by Alex Banks (Goodreads Author), Eve Porcello'/>
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

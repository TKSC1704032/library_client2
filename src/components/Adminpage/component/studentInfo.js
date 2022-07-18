import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Box, Button, Grid, List, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
 
export default function StudentsInfo() {
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={0} md={2} />
      <Grid item xs={12} md={8} >
      <Paper sx={{ width: '100%', }} elevation={24}>
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h4">Students Information</Typography>
    </Box>
      
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Tusher" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Tusher Kumar Saha"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Roll: 1704032 , Dept: ETE, Series:17
                  </Typography>
                  <h3>Borrow Request:01 ,Borrowed Books:2 , Expire time:11/07/2022 </h3>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Fayed" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Fayed Al Mamun"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "block" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Roll: 1704032 , Dept: ETE, Series:17
                  </Typography>
                  <h3>Borrow Request:01 ,Borrowed Books:2 , Expire time:11/07/2022 </h3>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Mehedi" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Mehedi Hasan"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "Block" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Roll: 1704032 , Dept: ETE, Series:17
                  </Typography>
                  <h3>Borrow Request:01 ,Borrowed Books:2 , Expire time:11/07/2022 </h3>

                </React.Fragment>
              }
            />
          </ListItem>
        </List>
        <Box sx={{ p: 2, border: '1px dashed grey' }}>
      <Button endIcon={<HourglassBottomIcon/>}>load more</Button>
    </Box>
        </Paper>
      </Grid>
      <Grid item xs={0} md={2} />
    </Grid>
  );
}

import EmailIcon from '@mui/icons-material/Email';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import { Box, Button, Grid, List, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
 
export default function AdminNotification() {
  return (
    <Grid container spacing={1} direction="row">
      <Grid item xs={0} md={2} />
      <Grid item xs={12} md={8} >
      <Paper sx={{ width: '100%', }} elevation={24}>
      <Box sx={{ p: 2, border: '1px dashed grey' }}>
        <Typography variant="h4">Notifications</Typography>
      <Button startIcon={<EmailIcon/>}> Mark as all read</Button>
    </Box>
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Successfully Created Your Account"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Online Library
                  </Typography>
                  {" — Now you can borrow your books..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Your requests for books have been accepted"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Online Library
                  </Typography>
                  {" — Receive yours books from library within 2 days…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Return your books to library"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Online Library
                  </Typography>
                  {" — You can re-new your books if you need otherwise return it…"}
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

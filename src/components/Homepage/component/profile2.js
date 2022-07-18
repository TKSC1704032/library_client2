import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React from "react";


function Editfield(){
 return(
  <ButtonGroup disableElevation variant="contained">
  <label>Name</label>
  <input type='text' readOnly value='tusher'/>
  <Button sx={{borderRadius:'0px'}}>Two</Button>
</ButtonGroup>
 )
}
export default function Profile() {
  return (
    <Container maxWidth="xl">
      <Box
        mt={2}
        sx={{ bgcolor: "#F3F4F6", height: "100vh", borderRadius: "15px" }}
      >
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} md={4}>
            <Typography variant="h5">Profile</Typography>
            <p>
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              mt={2}
              sx={{ bgcolor: "#FFFFFF", height: "auto", borderRadius: "15px" }}
            >
              {Editfield()}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

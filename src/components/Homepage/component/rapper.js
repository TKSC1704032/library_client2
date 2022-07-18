import { Box, Container } from "@mui/material";
import React from "react";
import ResponsiveAppBar from "./header";

export default function Rapper({ children }) {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="xl">
        <Box
          mt={2}
          sx={{ bgcolor: "#F3F4F6", height: "100vh", borderRadius: "15px" ,padding:"20px"}}
        >
          {children}
        </Box>
      </Container>
    </>
  );
}

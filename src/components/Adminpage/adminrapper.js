import { Box, Container } from "@mui/material";
import AppBars from './appbar';

export default function Adminrapper({children}) {
  return (
    <>
   <AppBars/>
   <Container maxWidth="xl">
        <Box
          mt={2}
          sx={{ bgcolor: "#F3F4F6", height: "100vh", borderRadius: "15px" ,padding:"20px"}}
        >
          {children}
        </Box>
      </Container>
    
    
    </>
  )
}
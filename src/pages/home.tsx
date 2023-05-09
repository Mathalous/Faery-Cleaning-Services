import { Box, Typography } from "@mui/material";

export function Home(){
  return <Box sx={{width:'100%'}}>
    <Box sx={{ textAlign:'center' }}>
      <Typography variant="h4" >
        Faery Cleaning Services
      </Typography>
      <Typography variant="subtitle1">
        We make your home faery clean!
      </Typography>
    </Box>
  </Box>
}
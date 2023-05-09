import { Box, Paper, ThemeProvider, ToggleButton, ToggleButtonGroup, Toolbar } from "@mui/material";
import { Themes } from "./themes";
import { Pages, PagesElements } from "./pages";
import React from "react";

function App() {
  const [selectedPage, setSelectedPage] = React.useState<Pages>(Pages.home);
  return (
    <ThemeProvider theme={Themes.dark}>
      <Paper sx={{width:'100%', height:'100%', overflow:'auto', borderRadius:0}}>
        <Paper elevation={2}>
          <Toolbar>
            <ToggleButtonGroup sx={{width:'100%', display:'flex'}}>
              {
                (Object.values(Pages)).map(
                  (p) => {
                    return <ToggleButton 
                      key={p} value={p} 
                      selected={p === selectedPage} 
                      onClick={() => setSelectedPage(p)}
                      sx={{flex:'1'}}
                    >{p}</ToggleButton>
                  }
                )
              }
            </ToggleButtonGroup>
          </Toolbar>
        </Paper>
        <Box padding={1} >
          {PagesElements[selectedPage]}
        </Box>
      </Paper>
    </ThemeProvider>
  )
}

export default App;

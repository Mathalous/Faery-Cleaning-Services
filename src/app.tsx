import { Paper, ThemeProvider } from "@mui/material";
import { Themes } from "./themes";
import { Appbar } from "./components/appbar";


function App() {
  return (
    <ThemeProvider theme={Themes.dark}>
      <Paper sx={{width:'100%', height:'100%', borderRadius:0}}>
        <Appbar {...{
          onHome : () => {

          },
          onPricing : () => {

          },
          onApplication : () => {

          }
        }} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;

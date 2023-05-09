import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{
    button:{
      textTransform: 'none'
    }
  }
});

export const lightTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography:{
    button:{
      textTransform: 'none'
    }
  }
});

export const Themes = {
  dark:darkTheme,
  light:lightTheme
}
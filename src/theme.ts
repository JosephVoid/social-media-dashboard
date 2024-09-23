import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6573c3",
      main: "#3f51b5",
      dark: "#2c387e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff9100",
      main: "#ffa733",
      dark: "#b26500",
      contrastText: "#000",
    },
  },
});

export default theme;

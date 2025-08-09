import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFC0D3", // pink
      light: "#FDEFF4", // light pink
      dark: "#524A4E", // dark neutral
      contrastText: "#fff", // white text on primary
    },
    secondary: {
      main: "#AEDEFC", // blue
      light: "#FFCD4B", // yellow
    },
    background: {
      default: "#FB90B7",
      paper: "#2B2730",
    },
  },
  typography: {
    fontFamily: "Judson, Lato sans-serif",
    fontSize: 16,
    h1: {
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3rem",
    },
    h3: {
      fontSize: "2.5rem",
    },
    h4: {
      fontSize: "1.2rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;

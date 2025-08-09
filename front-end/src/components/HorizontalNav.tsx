import { useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import theme from "../theme";
import MenuIcon from "@mui/icons-material/Menu";

export default function HorizontalNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  // Get the current pathname from the router
  const location = useLocation();
  const pathname = location.pathname;
  let title: string;
  switch (pathname) {
    case "/":
      title = "Hello, I'm ALison.";
      break;
    case "/about":
      title = "About Me";
      break;
    case "/contact":
      title = "Contact Me";
      break;
    default:
      title = "Hello, I'm ALison.";
      break;
  }

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        height: "12%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Navbar Icon */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 100,
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.palette.primary.contrastText,
          borderRadius: "50%",
          left: "30px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.secondary.light,
          },
          "&:active": {
            backgroundColor: theme.palette.secondary.light,
          },
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon
          sx={{ color: theme.palette.background.paper, fontSize: "60px" }}
        />
      </Box>
      {/* Navbar Content */}
      <Typography
        variant="h1"
        sx={{
          color: theme.palette.primary.contrastText,
          fontFamily: theme.typography.fontFamily,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

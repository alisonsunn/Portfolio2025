import { Box, Slide, Typography } from "@mui/material";
import theme from "../theme";

export default function VerticalNav({ isOpen }: { isOpen: boolean }) {
  return (
    <Slide
      direction="down"
      in={isOpen}
      easing={{
        enter: "ease-in-out",
        exit: "ease-in-out",
      }}
      timeout={{
        enter: 500,
        exit: 400,
      }}
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 50,
          width: "25%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h2">About Me</Typography>
        <Typography variant="h2">Experience</Typography>
        <Typography variant="h2">Projects</Typography>
        <Typography variant="h2">Contact Me</Typography>
      </Box>
    </Slide>
  );
}

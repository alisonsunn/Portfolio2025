import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
import theme from "../theme";

export default function MarqueeText() {
  return (
    <Box
      sx={{
        borderTop: `3px solid ${theme.palette.background.paper}`,
        borderBottom: `3px solid ${theme.palette.background.paper}`,
        width: "100%",
        padding: "12px 20px",
        backgroundColor: theme.palette.primary.light
      }}
    >
      <Marquee gradient={false} speed={50} pauseOnHover={true}>
        <Typography variant="h3" sx={{ fontFamily: "Lato" }}>
          🛠️ Break it, fix it, automate it •🌟 UX starts with care •☁️ Always
          caffeinated, always curious
        </Typography>
      </Marquee>
    </Box>
  );
}

import GetInTouchInfo from "../components/GetInTouchInfo";
import { Box, Typography } from "@mui/material";
import theme from "../theme";
import contactInfo from "../data/contactInfo.json";

export default function GetInTouch() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "450px",
        backgroundColor: theme.palette.background.paper,
        padding: "40px 15px",
        borderRadius: "24px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: theme.palette.primary.contrastText, fontFamily: "lato" }}
      >
        Get in touch
      </Typography>
      {contactInfo.map((info) => (
        <GetInTouchInfo key={info.title} info={info} />
      ))}
    </Box>
  );
}

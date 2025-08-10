import { Card, Typography } from "@mui/material";
import theme from "../theme";
import MessageMeInfo from "./MessageMeInfo";

export default function GetInTouch() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "450px",
        height: "100%",
        backgroundColor: theme.palette.primary.contrastText,
        padding: "40px 15px",
        borderRadius: "24px",
        fontFamily: "Lato, sans-serif",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: theme.palette.background.paper,
          fontFamily: "Lato, sans-serif",
        }}
      >
        Message Me
      </Typography>
      {/* Input Info */}
      <MessageMeInfo />
    </Card>
  );
}

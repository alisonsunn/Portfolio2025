import { Card, Typography } from "@mui/material";
import theme from "../theme";

export default function GetInTouch() {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        width: "450px",
        backgroundColor: theme.palette.primary.contrastText,
        padding: "40px 15px",
        borderRadius: "24px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ color: theme.palette.background.paper, fontFamily: "lato" }}
      >
        Message Me
      </Typography>
      {/* Input Info */}
    </Card>
  );
}

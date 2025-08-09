import { Box, Typography, Card } from "@mui/material";
import theme from "../theme";

interface ContactInfo {
  icon: string;
  title: string;
  detail: string;
}

export default function GetInTouchInfo({ info }: { info: ContactInfo }) {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "center",
        backgroundColor: theme.palette.primary.light,
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          height: "50px",
          width: "50px",
          borderRadius: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {info.icon}
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontFamily: "lato", fontWeight: "bold" }}
        >
          {info.title}
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "lato" }}>
          {info.detail}
        </Typography>
      </Box>
    </Card>
  );
}

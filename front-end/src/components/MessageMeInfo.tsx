import { Box, TextField, Button } from "@mui/material";
import theme from "../theme";

export default function MessageMeInfo() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="Name"
          name="name"
          sx={{
            "& .MuiInputBase-root": { fontFamily: "Lato, sans-serif" },
            "& .MuiInputLabel-root": { fontFamily: "Lato, sans-serif" },
          }}
        />
        <TextField
          label="Email"
          name="email"
          sx={{
            "& .MuiInputBase-root": { fontFamily: "Lato, sans-serif" },
            "& .MuiInputLabel-root": { fontFamily: "Lato, sans-serif" },
          }}
        />
        <TextField
          label="Message"
          name="message"
          multiline
          rows={4}
          sx={{
            "& .MuiInputBase-root": { fontFamily: "Lato, sans-serif" },
            "& .MuiInputLabel-root": { fontFamily: "Lato, sans-serif" },
          }}
        />
      </Box>
      <Button
        type="submit"
        sx={{
          mt: 2,
          fontFamily: "Lato, sans-serif",
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.dark,
          borderRadius: "12px",
          fontSize: "1.2rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
}

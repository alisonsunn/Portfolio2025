import GetInTouch from "../components/GetInTouch";
import MessageMe from "../components/MessageMe";
import { Box } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        margin: "50px auto",
      }}
    >
      <GetInTouch />
      <MessageMe />
    </Box>
  );
}

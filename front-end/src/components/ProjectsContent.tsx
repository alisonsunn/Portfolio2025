import { Box } from "@mui/material";
import theme from "../theme";

export default function ProjectsContent() {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.dark,
        borderWidth: "3px",
        borderStyle: "solid",
        borderRadius: "24px",
        width: "100%",
        height: "300px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></Box>
  );
}

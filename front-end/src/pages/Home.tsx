import { Container, Box, Typography } from "@mui/material";
import HomeCard from "../components/HomeCard";
import homepic1 from "../assets/homepic1.png";
import homepic2 from "../assets/homepic2.png";
import homepic3 from "../assets/homepic3.png";
import theme from "../theme";

export default function Home() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row", md: "row" },
          gap: "40px",
          marginTop: "40px",
        }}
      >
        <HomeCard image={homepic1} buttonText="About Me" linkTo="/about" />
        <HomeCard image={homepic2} buttonText="Experience" />
        <HomeCard image={homepic3} buttonText="Projects" />
      </Box>
      <Box>
        <Typography variant="h2">
          A{" "}
          <Box component="span" fontWeight="bold" fontSize="inherit">
            quirky
          </Box>{" "}
          <Box
            component="span"
            fontWeight="bold"
            fontSize={theme.typography.h1.fontSize}
            color={theme.palette.primary.contrastText}
          >
            ✿
          </Box>{" "}
          <Box
            sx={{
              border: `5px solid ${theme.palette.background.paper}`,
              padding: "5px 20px",
              borderRadius: "100px",
              transform: "rotate(-6deg) translateY(-30px)",
              backgroundColor: theme.palette.primary.light,
              display: "inline-block",
              fontWeight: "bold",
            }}
          >
            developer Magician
          </Box>{" "}
          who turns{" "}
          <Box component="span" fontWeight="bold">
            chaos
          </Box>{" "}
          <Box
            component="span"
            fontWeight="bold"
            fontSize={theme.typography.h1.fontSize}
            color={theme.palette.primary.contrastText}
          >
            ❥
          </Box>{" "}
          into beautiful 🎶, scalable 🔧 symphonies ◕‿◕✿.
        </Typography>
      </Box>
    </Container>
  );
}

import { Box } from "@mui/material";
import AboutMeCard from "../components/AboutMeCard";
import aboutMeCard from "../data/aboutMeCard.json";
import MarqueeText from "../components/Marquee";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        gap: "180px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          flexWrap: "wrap",
          marginTop: "120px",
          position: "relative",
        }}
      >
        {/* Cards */}
        {aboutMeCard.map((card, index) => (
          <Box
            key={index}
            sx={{
              marginTop: `${index % 2 === 0 ? 0 : 40}px`,
              marginLeft: index * -2,
            }}
          >
            <AboutMeCard {...card} />
          </Box>
        ))}
      </Box>
      {/* MarqueeText */}
      <MarqueeText />
    </Box>
  );
}

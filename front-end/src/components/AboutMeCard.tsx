import { Card, CardContent, Typography, Box, Divider } from "@mui/material";
import theme from "../theme";
import { motion } from "framer-motion";

// card information - json file
interface AboutMeCardProps {
  title: string;
  emoji: string;
  content: string;
  rotation: string;
}

export default function AboutMeCard({
  title,
  emoji,
  content,
  rotation,
}: AboutMeCardProps) {

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{
        scale: 1.05,
        zIndex: 1000,
      }}
    >
      <Card
        sx={{
          backgroundColor: theme.palette.primary.main,
          width: { xs: "280px", sm: "320px", md: "400px" },
          height: { xs: "350px", sm: "400px", md: "250px" },
          minWidth: "280px",
          minHeight: "200px",
          border: `4px solid ${theme.palette.background.paper}`,
          borderRadius: "24px",
          transform: `rotate(${rotation})`,
          cursor: "grab",
          "&:active": {
            cursor: "grabbing",
          },
          transition: "transform 0.2s ease",
          "&:hover": {
            transform: `rotate(${rotation}) scale(1.02)`,
          },
        }}
      >
        <CardContent sx={{ padding: "0" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px 20px",
            }}
          >
            <Typography variant="h2">{title}</Typography>
            <Box>
              <Typography variant="h2">{emoji}</Typography>
            </Box>
          </Box>
          <Divider
            sx={{
              width: "100%",
              borderColor: theme.palette.background.paper,
              borderWidth: "1.2px",
            }}
          />
          <Box sx={{ padding: "0 20px" }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "lato", marginTop: "20px" }}
            >
              {content}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}

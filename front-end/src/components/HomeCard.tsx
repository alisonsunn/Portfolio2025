import { Card, Typography, CardContent, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function HomeCard({
  image,
  buttonText,
  linkTo,
}: {
  image: string;
  buttonText: string;
  linkTo?: string;
}) {
  const buttonSx = {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: { md: "290px" },
    height: { md: "78px" },
    borderRadius: "100px",
    border: `2px solid ${theme.palette.primary.dark}`,
  };

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.primary.light,
        width: { xs: "280px", sm: "320px", md: "350px" },
        height: { xs: "350px", sm: "400px", md: "450px" },
        minWidth: "280px",
        minHeight: "350px",
        borderRadius: "24px",
        border: `3px solid ${theme.palette.primary.dark}`,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Homepics"
          sx={{
            width: { xs: "220px", sm: "250px", md: "280px" },
            height: { xs: "250px", sm: "280px", md: "320px" },
            objectFit: "contain",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
        {linkTo ? (
          <Button component={Link} to={linkTo} sx={buttonSx}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: theme.palette.background.paper }}
            >
              {buttonText}
            </Typography>
          </Button>
        ) : (
          <Button sx={buttonSx}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: theme.palette.background.paper }}
            >
              {buttonText}
            </Typography>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

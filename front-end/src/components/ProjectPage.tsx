import { Box, Grid, Typography } from "@mui/material";
import skills from "../data/skills.json";
import theme from "../theme";
import ProjectsContent from "./ProjectsContent";

interface Skill {
  id: number;
  name: string;
}

export default function SkillsDisplay() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      {/* Skills */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          paddingLeft: "25px",
          paddingTop: "120px",
          backgroundColor: theme.palette.primary.dark,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.contrastText,
            marginBottom: "20px",
          }}
        >
          Skills
        </Typography>
        <Grid
          container
          sx={{
            maxWidth: "100%",
            maxHeight: "100%",
            margin: 0,
          }}
        >
          {(skills as Skill[]).map((skill: Skill) => (
            <Grid
              item
              xs={4}
              key={skill.id}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                minHeight: "60px",
                padding: "8px 8px 8px 0",
              }}
            >
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: "90px",
                  width: "200px",
                  borderRadius: "100px",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h4">{skill.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/* Projects */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          backgroundColor: theme.palette.background.default,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            color: theme.palette.primary.contrastText,
            marginBottom: "20px",
          }}
        >
          Projects
        </Typography>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <ProjectsContent />
            </Grid>
            <Grid item xs={6}>
              <ProjectsContent />
            </Grid>
            <Grid item xs={6}>
              <ProjectsContent />
            </Grid>
            <Grid item xs={6}>
              <ProjectsContent />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

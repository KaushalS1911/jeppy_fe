import React from "react";
import { Box, Container, Typography, useTheme } from "@mui/material";
import "aos/dist/aos.css";

function ProcessHero() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.saffron,
        minHeight: { xs: "40vh", md: "50vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          className="monserrat"
          data-aos="fade-up"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "48px", md: "64px", lg: "72px" },
            lineHeight: 1.2,
            color: "white",
            textAlign: "center",
          }}
        >
          We turn your snacking vision into reality.
        </Typography>
      </Container>
    </Box>
  );
}

export default ProcessHero;



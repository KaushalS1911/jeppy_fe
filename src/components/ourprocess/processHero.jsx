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
        pt: { xs: 10, md: 22 },
        pb: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          className="jua"
          data-aos="fade-up"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "42px", sm: "58px", md: "74px", lg: "82px" },
            lineHeight: 1.2,
            color: "white",
            textAlign: "center",
            width: "60%",
            mx: "auto",
          }}
        >
          We turn your snacking vision into reality
        </Typography>
      </Container>
    </Box>
  );
}

export default ProcessHero;

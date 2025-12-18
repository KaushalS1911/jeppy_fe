import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import "aos/dist/aos.css";
import wheelPellet from "../../assets/company/2D_0565.png";
import wafflePellet from "../../assets/company/2D_0671.png";

const visionMissionData = [
  {
    title: "Vision",
    description:
      "To become a global benchmark in clean, smart, and scalable snack manufacturing — driven by quality, innovation, and sustainability.",
  },
  {
    title: "Mission",
    description:
      "To empower brands with snack solutions that are bold in taste, honest in ingredients, and tailored to the evolving needs of consumers across the world.",
  },
];

function CompanyVisionMission() {
  return (
    <Box
      sx={{
        backgroundColor: "#C37A3D",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Pellets */}
      <Box
        component="img"
        src={wheelPellet}
        alt="Wheel Pellet"
        sx={{
          position: "absolute",
          bottom: { xs: "10%", md: "15%" },
          left: { xs: "5%", md: "8%" },
          width: { xs: "40px", md: "60px" },
          height: "auto",
          opacity: 0.3,
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={wafflePellet}
        alt="Waffle Pellet"
        sx={{
          position: "absolute",
          top: { xs: "15%", md: "20%" },
          right: { xs: "5%", md: "8%" },
          width: { xs: "45px", md: "65px" },
          height: "auto",
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          {visionMissionData.map((item, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: { xs: "30px", sm: "40px", md: "50px" },
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  minHeight: { xs: "auto", md: "250px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                data-aos={index === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 150}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "28px", sm: "32px", md: "36px" },
                    color: "#F97316",
                    fontWeight: 700,
                    mb: 3,
                    fontFamily: "Inter",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    lineHeight: { xs: "24px", sm: "28px", md: "32px" },
                    color: "#000000",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CompanyVisionMission;

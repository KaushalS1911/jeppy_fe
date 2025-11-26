import React from "react";
import { Box, Typography, Container, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import wheelPellet from "../../assets/images/home/heroSection/png/2D_0565.png";
import pennePellet from "../../assets/images/home/heroSection/png/2D PENNE.png";
import pyramidPellet from "../../assets/images/home/heroSection/png/3D_0569.png";

const CompanyCTA = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
        padding: { xs: "60px 20px", sm: "80px 30px", md: "100px 40px" },
        backgroundColor: "#E8D5C4",
        overflow: "hidden",
      }}
    >
      {/* Scattered Pellet Images */}
      <Box
        component="img"
        src={wheelPellet}
        alt="Ring Pellet"
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "15%" },
          left: { xs: "5%", md: "10%" },
          width: { xs: "50px", md: "80px" },
          height: "auto",
          zIndex: 1,
          opacity: 0.6,
        }}
      />
      <Box
        component="img"
        src={pennePellet}
        alt="Penne Pellet"
        sx={{
          position: "absolute",
          top: { xs: "20%", md: "25%" },
          right: { xs: "5%", md: "10%" },
          width: { xs: "45px", md: "70px" },
          height: "auto",
          zIndex: 1,
          opacity: 0.6,
        }}
      />
      <Box
        component="img"
        src={pyramidPellet}
        alt="Pyramid Pellet"
        sx={{
          position: "absolute",
          bottom: { xs: "15%", md: "20%" },
          right: { xs: "8%", md: "12%" },
          width: { xs: "40px", md: "60px" },
          height: "auto",
          zIndex: 1,
          opacity: 0.6,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 4, md: 5 },
          maxWidth: "1200px",
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Main Text */}
        <Typography
          sx={{
            fontFamily: "Jua",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px", xl: "64px" },
            lineHeight: "1.2",
            letterSpacing: "0%",
            color: "#000000",
            textAlign: "center",
            flex: 1,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            px: { xs: 2, sm: 0 },
          }}
        >
          Shape the future of snacking
        </Typography>

        {/* Contact Us Button */}
        <Button
          onClick={() => navigate("/contact")}
          sx={{
            padding: { xs: "14px 40px", sm: "16px 48px", md: "18px 56px", lg: "20px 64px" },
            borderRadius: "50px",
            backgroundColor: "#F97316",
            color: "#FFFFFF",
            fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
            fontWeight: 700,
            fontFamily: "Jua",
            textTransform: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 4px 12px rgba(249, 115, 22, 0.3)",
            "&:hover": {
              backgroundColor: "#ea6b0a",
              transform: "translateY(-3px)",
              boxShadow: "0 6px 20px rgba(249, 115, 22, 0.4)",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
};

export default CompanyCTA;




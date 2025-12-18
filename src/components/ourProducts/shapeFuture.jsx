import React from "react";
import { Box, Typography } from "@mui/material";

// Import Contact Us Bar floating images
import contactBarImg1 from "../../assets/Contact Us Bar/2D SQUARE CHIPS.png";
import contactBarImg2 from "../../assets/Contact Us Bar/2D_0581.png";

const ShapeFuture = () => {
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
        padding: {
          xs: "60px 20px",
          sm: "80px 30px",
          md: "100px 40px",
          lg: "120px 60px",
        },
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      {/* Floating Images (only 2) */}
      {/* Left Image */}
      <Box
        component="img"
        src={contactBarImg1}
        alt="Decorative snack shape left"
        sx={{
          position: "absolute",
          top: { xs: "22%", md: "50%" },
          left: { xs: "5%", md: "10%" },
          transform: { xs: "none", md: "translateY(-50%)" },
          width: { xs: "70px", sm: "90px", md: "130px" },
          height: "auto",
          zIndex: 1,
          opacity: 0.95,
        }}
      />

      {/* Right Image */}
      <Box
        component="img"
        src={contactBarImg2}
        alt="Decorative snack shape right"
        sx={{
          position: "absolute",
          top: { xs: "20%", md: "50%" },
          right: { xs: "5%", md: "10%" },
          transform: { xs: "none", md: "translateY(-50%)" },
          width: { xs: "70px", sm: "90px", md: "130px" },
          height: "auto",
          zIndex: 1,
          opacity: 0.95,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 4, md: 5 },
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Main Text */}
        <Typography
          className="jua"
          sx={{
            fontFamily: "Jua",
            fontWeight: 700,
            fontSize: {
              xs: "38px",
              sm: "46px",
              md: "58px",
              lg: "66px",
              xl: "74px",
            },
            lineHeight: "1.2",
            letterSpacing: "0%",
            color: "#000000",
            textAlign: "center",
            whiteSpace: { xs: "normal", sm: "nowrap" },
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            px: { xs: 2, sm: 0 },
          }}
        >
          Shape the future of snacking
        </Typography>

        {/* Contact Us Button */}
        <Box
          component="a"
          href="/contact"
          sx={{
            display: "inline-block",
            padding: {
              xs: "14px 40px",
              sm: "16px 48px",
              md: "18px 56px",
              lg: "20px 64px",
            },
            borderRadius: "50px",
            backgroundColor: "#F97316",
            color: "#FFFFFF",
            fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
            fontWeight: 700,
            fontFamily: "Jua",
            cursor: "pointer",
            textDecoration: "none",
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
        </Box>
      </Box>
    </Box>
  );
};

export default ShapeFuture;

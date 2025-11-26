import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import logo from "../../assets/images/global/jeepy-logo.png";

// Import your background images here
import bgImage1 from "../../assets/images/home/heroSection/bg1.png";
import bgImage2 from "../../assets/images/home/heroSection/bg2.jpg";
import bgImage3 from "../../assets/images/home/heroSection/bg3.png";
import bgImage4 from "../../assets/images/home/heroSection/bg4.png";
import bgImage5 from "../../assets/images/home/heroSection/bg5.png";
import bgImage6 from "../../assets/images/home/heroSection/bg6.jpg";

import wowLogo from "../../assets/images/home/our Company/wow.PNG";
import papadumLogo from "../../assets/images/home/our Company/pappadum.PNG";
import jeppyLogo from "../../assets/images/global/jeepy-logo.png";

// Import partner logos
import balajiLogo from "../../assets/images/home/ourParteners/balaji.PNG";
import realLogo from "../../assets/images/home/ourParteners/real.PNG";
import haldiramLogo from "../../assets/images/home/ourParteners/haldiram.PNG";
import craxLogo from "../../assets/images/home/ourParteners/crax.PNG";
import sunderLogo from "../../assets/images/home/ourParteners/Sunder.PNG";
import shyamGLogo from "../../assets/images/home/ourParteners/shyam-g.PNG";
import panjwaniLogo from "../../assets/images/home/ourParteners/panjwani.PNG";
import akashLogo from "../../assets/images/home/ourParteners/akash.PNG";
import prinitiLogo from "../../assets/images/home/ourParteners/priniti.PNG";
import babluLogo from "../../assets/images/home/ourParteners/Bablu.PNG";
import ghodawatLogo from "../../assets/images/home/ourParteners/ghodawat-foods.PNG";

// Import pellet images
import pennePellet from "../../assets/images/home/heroSection/png/2D PENNE.png";
import wafflePellet from "../../assets/images/home/heroSection/png/2D Potato_0633.png";
import pyramidPellet from "../../assets/images/home/heroSection/png/3D_0569.png";
import wheelPellet from "../../assets/images/home/heroSection/png/2D_0565.png";
import ovalPellet from "../../assets/images/home/heroSection/png/2D_0578.png";

import factoryBuilding from "../../assets/images/home/heroSection/factory.png";

// Import quality process images
import rawMaterialImg from "../../assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png";
import manufacturingImg from "../../assets/images/ourprocess/ManufacturingProcessSteps/CoreProductionProcess.png";
import qualityControlImg from "../../assets/images/ourprocess/ManufacturingProcessSteps/QualityControl.png";
import packagingImg from "../../assets/images/ourprocess/ManufacturingProcessSteps/Packaging&Storage.png";

function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Cereal Based");

  // Array of your background images
  const backgroundImages = [
    bgImage1,
    bgImage2,
    bgImage3,
    bgImage4,
    bgImage5,
    bgImage6,
  ];

  // Categories for products
  const categories = [
    "Cereal Based",
    "Potato Based",
    "Millet Pellets",
    "Lentil Pellets",
    "Low Sodium",
  ];

  // Sample product data with mock data
  const productsByCategory = {
    "Cereal Based": [
      { id: 1, name: "Fish Pellets", image: null },
      { id: 2, name: "Alphabet Shapes", image: null },
      { id: 3, name: "Shell Pellets", image: null },
      { id: 4, name: "Wheel Pellets", image: null },
    ],
    "Potato Based": [
      { id: 9, name: "Classic Chips", image: null },
      { id: 10, name: "Potato Sticks", image: null },
      { id: 11, name: "Wavy Chips", image: null },
      { id: 12, name: "Potato Rings", image: null },
    ],
    "Millet Pellets": [
      { id: 17, name: "Millet Balls", image: null },
      { id: 18, name: "Millet Sticks", image: null },
      { id: 19, name: "Millet Rings", image: null },
      { id: 20, name: "Millet Squares", image: null },
    ],
    "Lentil Pellets": [
      { id: 25, name: "Lentil Chips", image: null },
      { id: 26, name: "Lentil Sticks", image: null },
      { id: 27, name: "Lentil Rounds", image: null },
      { id: 28, name: "Lentil Twists", image: null },
    ],
    "Low Sodium": [
      { id: 33, name: "Low Salt Chips", image: null },
      { id: 34, name: "Low Salt Sticks", image: null },
      { id: 35, name: "Low Salt Rings", image: null },
      { id: 36, name: "Low Salt Waves", image: null },
    ],
  };

  // Font is now loaded via CSS

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {/* Background Images with Fade Transition - Fixed to cover entire viewport */}
      {backgroundImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: currentImageIndex === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: 0,
          }}
        />
      ))}

      {/* Orange Glassmorphism Overlay - Fixed to cover entire viewport */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(254, 195, 85, 0.2)",
          backgroundBlendMode: "overlay",
          backdropFilter: "blur(1px)",
          WebkitBackdropFilter: "blur(1px)",
          zIndex: 1,
        }}
      />

      {/* Hero Section - Full Screen */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Logo at the top */}
        <Box
          sx={{
            position: "absolute",
            top: { xs: 20, sm: 30, md: 40 },
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: { xs: "120px", sm: "150px", md: "180px" },
            }}
          >
            <img
              src={logo}
              alt="Jeppy Logo"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        {/* Main Text Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 10,
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "84px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textShadow:
                "3px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
              color: "#FFFFFF",
              textAlign: "center",
              mb: { xs: 1, md: 2 },
              px: 2,
              textTransform: "uppercase",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            CRAFTING JOYFUL BITES.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "84px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textShadow:
                "3px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
              color: "#FFFFFF",
              textAlign: "center",
              mb: { xs: 1, md: 2 },
              px: 2,
              textTransform: "uppercase",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            400+ SHAPES OF DELIGHT
          </Typography>
        </Box>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 10,
            color: "white",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              mb: 2,
              opacity: 0.8,
            }}
          >
            Scroll Down
          </Typography>

          {/* Mouse Icon */}
          <Box
            sx={{
              width: "24px",
              height: "36px",
              border: "2px solid white",
              borderRadius: "12px",
              margin: "0 auto",
              position: "relative",
              opacity: 0.9,
            }}
          >
            {/* Mouse Wheel/Dot */}
            <Box
              sx={{
                width: "3px",
                height: "6px",
                backgroundColor: "white",
                borderRadius: "2px",
                position: "absolute",
                left: "50%",
                top: "6px",
                transform: "translateX(-50%)",
                animation: "mouseScroll 2s infinite",
                "@keyframes mouseScroll": {
                  "0%": {
                    opacity: 1,
                    transform: "translateX(-50%) translateY(0)",
                  },
                  "50%": {
                    opacity: 0.5,
                    transform: "translateX(-50%) translateY(12px)",
                  },
                  "100%": {
                    opacity: 1,
                    transform: "translateX(-50%) translateY(0)",
                  },
                },
              }}
            />
          </Box>

          {/* Image Indicators */}
          <Box
            sx={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              mt: 2,
            }}
          >
            {backgroundImages.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor:
                    currentImageIndex === index
                      ? "white"
                      : "rgba(255, 255, 255, 0.4)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* Brands Section - Appears on Scroll */}
      <Box
        sx={{
          minHeight: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "60px 20px", md: "80px 40px" },
          position: "relative",
          zIndex: 2,
          backgroundColor: "#C17C41", // Brown background
        }}
      >
        {/* Brands Showcase */}
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: "90%", sm: "80%", md: "900px", lg: "1000px" },
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "24px",
            padding: { xs: "30px 20px", sm: "40px 30px", md: "50px 40px" },
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* WOW Brand Logo */}
          <Box
            sx={{
              flex: { xs: "1 1 120px", sm: "0 1 auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={wowLogo}
              alt="WOW"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "220px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Jeppy Brand Logo */}
          <Box
            sx={{
              flex: { xs: "1 1 200px", sm: "0 1 auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={jeppyLogo}
              alt="Jeppy Incredible Snacks"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "320px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Pappadum Brand Logo */}
          <Box
            sx={{
              flex: { xs: "1 1 120px", sm: "0 1 auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={papadumLogo}
              alt="Pappadum"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "220px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Pioneers Section */}
      <Box
        sx={{
          minHeight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "60px 20px", md: "80px 40px" },
          backgroundColor: "#C17C41", // Brown background
          overflow: "hidden",
        }}
      >
        {/* Factory Building Outline - Background */}
        <Box
          sx={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "80%", md: "60%", lg: "50%" },
            maxWidth: "800px",
            height: "auto",
            zIndex: 1,
            opacity: 0.9,
          }}
        >
          {/* Factory Building SVG */}
          <img src={factoryBuilding} alt="Factory Building" />
        </Box>

        {/* Jeppy Text Overlay on Factory */}

        {/* Scattered Pellet Images */}
        {/* Penne Pellet - Top Left */}
        <Box
          component="img"
          src={pennePellet}
          alt="Penne Pellet"
          sx={{
            position: "absolute",
            top: { xs: "15%", md: "20%" },
            left: { xs: "5%", md: "10%" },
            width: { xs: "40px", md: "60px" },
            height: "auto",
            zIndex: 3,
            opacity: 0.8,
            transform: "rotate(-15deg)",
          }}
        />
        {/* Waffle Pellet - Top Right */}
        <Box
          component="img"
          src={wafflePellet}
          alt="Waffle Pellet"
          sx={{
            position: "absolute",
            top: { xs: "10%", md: "15%" },
            right: { xs: "8%", md: "12%" },
            width: { xs: "50px", md: "70px" },
            height: "auto",
            zIndex: 3,
            opacity: 0.8,
            transform: "rotate(20deg)",
          }}
        />
        {/* Pyramid Pellet - Bottom Left */}
        <Box
          component="img"
          src={pyramidPellet}
          alt="Pyramid Pellet"
          sx={{
            position: "absolute",
            bottom: { xs: "25%", md: "30%" },
            left: { xs: "8%", md: "15%" },
            width: { xs: "45px", md: "65px" },
            height: "auto",
            zIndex: 3,
            opacity: 0.8,
            transform: "rotate(25deg)",
          }}
        />
        {/* Wheel Pellet - Bottom Right */}
        <Box
          component="img"
          src={wheelPellet}
          alt="Wheel Pellet"
          sx={{
            position: "absolute",
            bottom: { xs: "20%", md: "25%" },
            right: { xs: "10%", md: "15%" },
            width: { xs: "50px", md: "70px" },
            height: "auto",
            zIndex: 3,
            opacity: 0.8,
            transform: "rotate(-30deg)",
          }}
        />
        {/* Oval Pellet - Middle Left */}
        <Box
          component="img"
          src={ovalPellet}
          alt="Oval Pellet"
          sx={{
            position: "absolute",
            top: "50%",
            left: { xs: "3%", md: "5%" },
            transform: "translateY(-50%) rotate(10deg)",
            width: { xs: "40px", md: "60px" },
            height: "auto",
            zIndex: 3,
            opacity: 0.8,
          }}
        />
        {/* Additional Pellet - Middle Right */}
        <Box
          component="img"
          src={pennePellet}
          alt="Penne Pellet"
          sx={{
            position: "absolute",
            top: "50%",
            right: { xs: "5%", md: "8%" },
            transform: "translateY(-50%) rotate(-20deg)",
            width: { xs: "35px", md: "55px" },
            height: "auto",
            zIndex: 3,
            opacity: 0.8,
          }}
        />

        {/* Pioneers Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            position: "relative",
            zIndex: 4,
            mt: { xs: "250px", md: "300px" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "84px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textShadow:
                "3px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
              color: "#FFFFFF",
              textAlign: "center",
              mb: { xs: 1, md: 2 },
              px: 2,
              textTransform: "uppercase",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            PIONEERS IN
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "84px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textShadow:
                "3px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
              color: "#FFFFFF",
              textAlign: "center",
              px: 2,
              textTransform: "uppercase",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            PELLET TECHNOLOGY
          </Typography>
        </Box>

        {/* Description Text - Full Width */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            padding: {
              xs: "40px 0px",
              sm: "50px 0px",
              md: "60px 0px",
              lg: "80px 0px",
            },
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            sx={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
              lineHeight: "1.8",
              textAlign: "center",
              color: "#000000",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            For over <strong>45 years</strong>, Jayant Snacks And Beverages Pvt.
            Ltd. has been at the forefront of the snack pellet industry. What
            began as a mission to provide high-quality base products has evolved
            into a relentless pursuit of innovation. Our core belief is simple:
            to empower our global partners with the foundational ingredients
            they need to create snack sensations.
          </Typography>
        </Box>
      </Box>

      {/* Our Products Section */}
      <Box
        sx={{
          minHeight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "60px 20px", md: "80px 40px" },
          backgroundColor: "#C17C41", // Brown background
        }}
      >
        {/* Products Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 700,
              fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              textAlign: "center",
              mb: 1,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            The Industry's Most Extensive
          </Typography>
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 700,
              fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px" },
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              textAlign: "center",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Shape Library
          </Typography>
        </Box>

        {/* Products Container with Tabs and Items */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1300px",
            backgroundColor: "rgba(255, 255, 255, 0.98)",
            borderRadius: "32px",
            padding: { xs: "40px 20px", sm: "50px 30px", md: "60px 50px" },
            boxShadow: "0 10px 50px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* Category Tabs */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: { xs: 2, md: 3 },
              mb: { xs: 4, md: 6 },
            }}
          >
            {categories.map((category) => (
              <Box
                key={category}
                onClick={() => setActiveCategory(category)}
                sx={{
                  padding: { xs: "12px 24px", md: "14px 32px" },
                  borderRadius: "50px",
                  backgroundColor:
                    activeCategory === category ? "#C17C41" : "transparent",
                  color: activeCategory === category ? "#FFFFFF" : "#000000",
                  border:
                    activeCategory === category ? "none" : "2px solid #E0E0E0",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      activeCategory === category ? "#C17C41" : "#F5F5F5",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {category}
              </Box>
            ))}
          </Box>

          {/* Product Items Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(4, 1fr)",
              },
              gap: { xs: 4, md: 6 },
              mb: { xs: 4, md: 6 },
            }}
          >
            {productsByCategory[activeCategory].map((product) => (
              <Box
                key={product.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    aspectRatio: "1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      backgroundColor: "#F5F5F5",
                      borderRadius: "12px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    {product.image ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: "12px",
                        }}
                      />
                    ) : (
                      <>
                        <Box
                          sx={{
                            width: "60%",
                            height: "60%",
                            backgroundColor: "#E0E0E0",
                            borderRadius: "8px",
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#999",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          Image Placeholder
                        </Typography>
                      </>
                    )}
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                    fontWeight: 600,
                    textAlign: "center",
                    color: "#000000",
                  }}
                >
                  {product.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* View All Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <Box
              sx={{
                padding: { xs: "14px 40px", md: "16px 50px" },
                borderRadius: "50px",
                backgroundColor: "#C17C41",
                color: "#FFFFFF",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#C17C41",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(193, 124, 65, 0.4)",
                },
              }}
            >
              View All
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Quality Process Section */}
      <Box
        sx={{
          minHeight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "60px 20px", md: "80px 40px" },
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Section Header */}
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "1200px",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#000000",
              textAlign: "center",
              mb: 3,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Quality isn't a step in our process
          </Typography>
          <Typography
            sx={{
              fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: "1.6",
              textAlign: "center",
              color: "#333333",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            It's embedded in everything we do. From raw material selection to
            packaged delivery, our integrated system ensures every pellet meets
            your exact specifications.
          </Typography>
        </Box>

        {/* Process Cards */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Card 1: Raw Material Sourcing */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "125%", // 4:5 aspect ratio
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={rawMaterialImg}
                alt="Raw Material Sourcing"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(0.2)",
                }}
              />
              {/* Number Circle */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jua",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  1
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Jua",
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Raw Material Sourcing
              </Typography>
            </Box>
          </Box>

          {/* Card 2: Advanced Manufacturing */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "125%",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={manufacturingImg}
                alt="Advanced Manufacturing"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(0.2)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jua",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  2
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Jua",
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Advanced Manufacturing
              </Typography>
            </Box>
          </Box>

          {/* Card 3: Quality Control */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "125%",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={qualityControlImg}
                alt="Quality Control"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(0.2)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jua",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  3
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Jua",
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Quality Control
              </Typography>
            </Box>
          </Box>

          {/* Card 4: Packaging & Logistics */}
          <Box
            sx={{
              position: "relative",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "125%",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={packagingImg}
                alt="Packaging & Logistics"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "sepia(0.2)",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Jua",
                    fontSize: "36px",
                    fontWeight: 700,
                    color: "#000000",
                  }}
                >
                  4
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Jua",
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: 600,
                  color: "#000000",
                }}
              >
                Packaging & Logistics
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Trusted By Section */}
      <Box
        sx={{
          minHeight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "60px 20px", md: "80px 40px" },
          backgroundColor: "#C17C41", // Brown background
        }}
      >
        {/* Section Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 8 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Jua",
              fontWeight: 700,
              fontSize: { xs: "48px", sm: "64px", md: "72px", lg: "80px" },
              lineHeight: "120%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              textAlign: "center",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
            }}
          >
            Trusted By
          </Typography>
        </Box>

        {/* Logos Grid - 4x3 layout */}
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 5 },
            padding: { xs: "20px", sm: "30px", md: "40px" },
          }}
        >
          {/* Row 1 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={balajiLogo}
              alt="Balaji Wafers"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={haldiramLogo}
              alt="Haldiram's"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={shyamGLogo}
              alt="Shyam-G"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={akashLogo}
              alt="Aakash"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={ghodawatLogo}
              alt="Yellow Diamond"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={craxLogo}
              alt="CRAX"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={panjwaniLogo}
              alt="Panjwani"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={babluLogo}
              alt="Lacy"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Row 3 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={realLogo}
              alt="REAL Namkeen"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={sunderLogo}
              alt="Sunder"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={prinitiLogo}
              alt="Priniti"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transform: "translateY(-5px)",
              },
            }}
          >
            <img
              src={craxLogo}
              alt="Modi's"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "180px",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Shape the Future Section */}
      <Box
        sx={{
          minHeight: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "60px 20px", sm: "80px 30px", md: "100px 40px", lg: "120px 60px" },
          backgroundColor: "#FFFFFF",
          overflow: "hidden",
        }}
      >
        {/* Scattered Pellet Images */}
        {/* Ring Pellet - Top Left */}
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
            opacity: 0.9,
          }}
        />
        {/* Small Ring Pellet - Middle Left */}
        <Box
          component="img"
          src={ovalPellet}
          alt="Small Ring Pellet"
          sx={{
            position: "absolute",
            top: { xs: "30%", md: "35%" },
            left: { xs: "8%", md: "15%" },
            width: { xs: "40px", md: "60px" },
            height: "auto",
            zIndex: 1,
            opacity: 0.9,
          }}
        />
        {/* Small Ridged Pellet - Bottom Left */}
        <Box
          component="img"
          src={pyramidPellet}
          alt="Small Ridged Pellet"
          sx={{
            position: "absolute",
            bottom: { xs: "15%", md: "20%" },
            left: { xs: "10%", md: "18%" },
            width: { xs: "35px", md: "55px" },
            height: "auto",
            zIndex: 1,
            opacity: 0.9,
          }}
        />
        {/* Large Ridged Pellet - Top Right */}
        <Box
          component="img"
          src={pennePellet}
          alt="Large Ridged Pellet"
          sx={{
            position: "absolute",
            top: { xs: "15%", md: "20%" },
            right: { xs: "5%", md: "10%" },
            width: { xs: "45px", md: "70px" },
            height: "auto",
            zIndex: 1,
            opacity: 0.9,
          }}
        />
        {/* Waffle Pellet - Bottom Right */}
        <Box
          component="img"
          src={wafflePellet}
          alt="Waffle Pellet"
          sx={{
            position: "absolute",
            bottom: { xs: "20%", md: "25%" },
            right: { xs: "8%", md: "15%" },
            width: { xs: "50px", md: "75px" },
            height: "auto",
            zIndex: 1,
            opacity: 0.9,
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
            sx={{
              fontFamily: "Jua",
              fontWeight: 700,
              fontSize: { xs: "28px", sm: "36px", md: "48px", lg: "56px", xl: "64px" },
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
              padding: { xs: "14px 40px", sm: "16px 48px", md: "18px 56px", lg: "20px 64px" },
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

      
    </Box>
  );
}

export default HeroSection;

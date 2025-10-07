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

import partner1 from "../../assets/images/home/ourParteners/panjwani 1.svg";
import partner2 from "../../assets/images/home/ourParteners/Bablu 1.svg";
import partner3 from "../../assets/images/home/ourParteners/balaji 1.svg";
import partner4 from "../../assets/images/home/ourParteners/haldiram 1.svg";

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
              fontFamily:
                '"Vina Sans", cursive, system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "36px", sm: "50px", md: "70px", lg: "93px" },
              lineHeight: "110%",
              letterSpacing: "0.02em",
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
              fontFamily:
                '"Vina Sans", cursive, system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "36px", sm: "50px", md: "70px", lg: "93px" },
              lineHeight: "110%",
              letterSpacing: "0.02em",
              textShadow:
                "3px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
              color: "#FFFFFF",
              textAlign: "center",
              mb: 1,
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
          minHeight: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "60px 20px", md: "80px 40px" },
          position: "relative",
          zIndex: 2,
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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "80px 0px", md: "120px 0px" },
        }}
      >
        {/* Pioneers Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 10, md: 24 },
          }}
        >
          <Typography
            sx={{
              fontFamily:
                '"Vina Sans", cursive, system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px" },
              lineHeight: "110%",
              letterSpacing: "0.02em",
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
              fontFamily:
                '"Vina Sans", cursive, system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px" },
              lineHeight: "110%",
              letterSpacing: "0.02em",
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
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
          padding: { xs: "80px 20px", md: "100px 40px" },
        }}
      >
        {/* Products Title */}
        <Typography
          sx={{
            fontFamily:
              '"Vina Sans", cursive, system-ui, -apple-system, sans-serif',
            fontWeight: 400,
            fontSize: { xs: "56px", sm: "72px", md: "88px", lg: "100px" },
            lineHeight: "110%",
            letterSpacing: "0.02em",
            textShadow:
              "3px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 12px rgba(0, 0, 0, 0.4)",
            color: "#FFFFFF",
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            textTransform: "uppercase",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
          }}
        >
          OUR PRODUCTS
        </Typography>

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
              mb: { xs: 6, md: 8 },
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
                    activeCategory === category ? "#CD853F" : "transparent",
                  color: activeCategory === category ? "#FFFFFF" : "#000000",
                  border:
                    activeCategory === category ? "none" : "2px solid #E0E0E0",
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor:
                      activeCategory === category ? "#B8753A" : "#F5F5F5",
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
                backgroundColor: "#CD853F",
                color: "#FFFFFF",
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#B8753A",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(205, 133, 63, 0.4)",
                },
              }}
            >
              View All
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Description Text - Full Width */}
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#FFFFFF",
            padding: {
              xs: "40px 30px",
              sm: "50px 40px",
              md: "60px 80px",
              lg: "80px 120px",
            },
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            sx={{
              margin: { xs: "0 0 12px 0", md: "0 0 24px 0" },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                fontSize: { xs: "18px", sm: "24px", md: "32px", lg: "42px" },
                lineHeight: "1.3",
                letterSpacing: "-1px",
                fontWeight: 500,
                textAlign: "center",
                color: "#000000",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              Shape the Future of Snacking.
            </Typography>
            <Typography
              sx={{
                fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
                fontSize: { xs: "18px", sm: "24px", md: "32px", lg: "42px" },
                lineHeight: "1.3",
                letterSpacing: "-1px",
                fontWeight: 500,
                textAlign: "center",
                color: "#000000",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              Over 400 Ways.
            </Typography>
          </Box>
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
            Our state-of-the-art manufacturing facilities, spanning 5
            continents, are built on a foundation of food safety, cutting-edge
            R&D, and sustainable practices. We don't just supply pellets; we are
            your strategic partner in growth, helping you anticipate and
            capitalize on consumer trends with agility and confidence.{" "}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Pioneers Title */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 12 },
          }}
        >
          <Typography
            sx={{
              fontFamily:
                '"Vina Sans", cursive, system-ui, -apple-system, sans-serif',
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px" },
              lineHeight: "110%",
              letterSpacing: "0.02em",
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
            SUCCESS PARTNERS
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
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
              src={partner1}
              alt="pajwani"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "220px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: { xs: "1 1 120px", sm: "0 1 auto" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={partner2}
              alt="bablu"
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
              src={partner3}
              alt="Balaji"
              style={{
                height: "auto",
                width: "100%",
                maxWidth: "220px",
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
              src={partner4}
              alt="haldiram"
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
    </Box>
  );
}

export default HeroSection;

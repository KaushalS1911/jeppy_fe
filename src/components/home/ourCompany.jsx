import React, { useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import Img1 from "../../assets/images/home/our Company/wow.PNG";
import Img2 from "../../assets/images/home/our Company/pappadum.PNG";
import Img3 from "../../assets/images/global/jeepy-logo.png";

function OurCompany() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Box sx={{ py: { xs: 2, md: 3 } }}>
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "stretch",
              minHeight: { xs: 300, sm: 240, md: 300, lg: 400 },
              height: "auto",
            }}
          >
            {/* First Box - Our Vision */}
            <Box
              data-aos="flip-left"
              data-aos-delay="100"
              sx={{
                background: `${theme.palette.saffron}`,
                width: { xs: "100%", md: "50%" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                minHeight: { xs: 300, sm: "100%" },
                py: { xs: 2, sm: 2, md: 3 },
                cursor: "pointer",
                "&:hover": {
                  "& .content-text": {
                    color: "white !important",
                  },
                  "& .content-title": {
                    color: "white !important",
                  },
                },
                "&:hover::before": {
                  opacity: 0.2,
                  transform: "rotate(-45deg) translateY(100%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-45%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  transform: "rotate(-45deg)",
                  transition: "all 0.7s ease",
                  opacity: 0,
                  zIndex: 1,
                },
                "&:hover .image": {
                  transform: "scale(1.1) !important",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                },
              }}
            >
              <Box
                sx={{
                  padding: {
                    xs: "0 12px",
                    sm: "0 20px",
                    md: "0 40px",
                    lg: "0 60px",
                  },
                  width: "100%",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <Typography
                  className={"monserrat content-title"}
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      md: "28px",
                      lg: "32px",
                      xl: "36px",
                    },
                    color: "#333",
                    paddingBottom: {
                      xs: "6px",
                      sm: "8px",
                      md: "12px",
                      lg: "16px",
                      xl: "20px",
                    },
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Our Vision
                </Typography>
                <Typography
                  className={"desc content-text"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                      xl: "22px",
                    },
                    color: "#525252",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                    lineHeight: { xs: 1.3, sm: 1.4, md: 1.5, lg: 1.6 },
                  }}
                >
                  Vision is to be the leading provider of innovative and
                  sustainable solutions that enhance the quality of life for
                  individuals and communities worldwide.
                </Typography>
              </Box>
            </Box>

            {/* Second Box - Logo */}
            <Box
              sx={{
                width: { xs: "100%", md: "60%" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                minHeight: { xs: 300, sm: "100%" },
                py: { xs: 2, sm: 2, md: 3 },
                cursor: "pointer",
                "&:hover::before": {
                  opacity: 0.2,
                  transform: "rotate(-45deg) translateY(100%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-45%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  transform: "rotate(-45deg)",
                  transition: "all 0.7s ease",
                  opacity: 0,
                  zIndex: 1,
                },
                "&:hover .image": {
                  transform: "scale(1.1) !important",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                },
              }}
            >
              <Box
                component="img"
                data-aos="fade-left"
                data-aos-delay="200"
                src={Img3}
                alt="PAPPADUM Brand"
                className={"image"}
                sx={{
                  width: "auto",
                  maxWidth: { xs: "65%", sm: "60%", md: "55%" },
                  maxHeight: { xs: "50%", sm: "55%", md: "60%" },
                  objectFit: "contain",
                  filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                  zIndex: 2,
                  position: "relative",
                  transition: "0.6s !important",
                  transformOrigin: "center center",
                  "&:hover": {
                    transform: "scale(1.1) !important",
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  },
                }}
              />
            </Box>

            {/* Third Box - Our Mission */}
            <Box
              data-aos="flip-right"
              data-aos-delay="300"
              sx={{
                background: `${theme.palette.saffron}`,
                width: { xs: "100%", md: "50%" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                minHeight: { xs: 300, sm: "100%" },
                py: { xs: 2, sm: 2, md: 3 },
                cursor: "pointer",
                "&:hover": {
                  "& .content-text": {
                    color: "white !important",
                  },
                  "& .content-title": {
                    color: "white !important",
                  },
                },
                "&:hover::before": {
                  opacity: 0.2,
                  transform: "rotate(-45deg) translateY(100%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-45%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  transform: "rotate(-45deg)",
                  transition: "all 0.7s ease",
                  opacity: 0,
                  zIndex: 1,
                },
                "&:hover .image": {
                  transform: "scale(1.1) !important",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                },
              }}
            >
              <Box
                sx={{
                  padding: {
                    xs: "0 12px",
                    sm: "0 20px",
                    md: "0 40px",
                    lg: "0 60px",
                  },
                  width: "100%",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <Typography
                  className={"monserrat content-title"}
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      md: "28px",
                      lg: "32px",
                      xl: "36px",
                    },
                    color: "#333",
                    paddingBottom: {
                      xs: "6px",
                      sm: "8px",
                      md: "12px",
                      lg: "16px",
                      xl: "20px",
                    },
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "color 0.3s ease",
                  }}
                >
                  Our Mission
                </Typography>
                <Typography
                  className={"desc content-text"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                      xl: "22px",
                    },
                    color: "#525252",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                    lineHeight: { xs: 1.3, sm: 1.4, md: 1.5, lg: 1.6 },
                  }}
                >
                  Mission is to deliver exceptional products and services that
                  empower individuals and organizations to achieve their goals
                  while fostering a culture of innovation, integrity, and social
                  responsibility
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "stretch",
              minHeight: { xs: 300, sm: 240, md: 300, lg: 400 },
              height: "auto",
            }}
          >
            {/* First Box - Logo */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                minHeight: { xs: 300, sm: "100%" },
                py: { xs: 2, sm: 2, md: 3 },
                cursor: "pointer",
                "&:hover::before": {
                  opacity: 0.2,
                  transform: "rotate(-45deg) translateY(100%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-45%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  transform: "rotate(-45deg)",
                  transition: "all 0.7s ease",
                  opacity: 0,
                  zIndex: 1,
                },
                "&:hover .image": {
                  transform: "scale(1.1) !important",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                },
              }}
            >
              <Box
                component="img"
                data-aos="fade-right"
                data-aos-delay="400"
                src={Img1}
                alt="WOW Brand"
                className={"image"}
                sx={{
                  width: "auto",
                  maxWidth: { xs: "65%", sm: "60%", md: "55%" },
                  maxHeight: { xs: "50%", sm: "55%", md: "60%" },
                  objectFit: "contain",
                  filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                  zIndex: 2,
                  position: "relative",
                  transformOrigin: "center center",
                  transition: "0.6s !important",
                }}
              />
            </Box>

            {/* Second Box - About Us */}
            <Box
              data-aos="flip-up"
              data-aos-delay="500"
              sx={{
                background: `${theme.palette.saffron}`,
                width: { xs: "100%", md: "60%" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                minHeight: { xs: 300, sm: "100%" },
                py: { xs: 2, sm: 2, md: 3 },
                cursor: "pointer",
                "&:hover": {
                  "& .content-text": {
                    color: "white !important",
                  },
                  "& .content-title": {
                    color: "white !important",
                  },
                },
                "&:hover::before": {
                  opacity: 0.2,
                  transform: "rotate(-45deg) translateY(100%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-45%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  transform: "rotate(-45deg)",
                  transition: "all 0.7s ease",
                  opacity: 0,
                  zIndex: 1,
                },
                "&:hover .image": {
                  transform: "scale(1.1) !important",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                },
              }}
            >
              <Box
                sx={{
                  padding: {
                    xs: "0 12px",
                    sm: "0 20px",
                    md: "0 40px",
                    lg: "0 60px",
                  },
                  width: "100%",
                  zIndex: 2,
                  position: "relative",
                }}
              >
                <Typography
                  className={"monserrat content-title"}
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      md: "28px",
                      lg: "32px",
                      xl: "36px",
                    },
                    color: "#333",
                    paddingBottom: {
                      xs: "6px",
                      sm: "8px",
                      md: "12px",
                      lg: "16px",
                      xl: "20px",
                    },
                    fontWeight: "bold",
                    textAlign: "center",
                    letterSpacing: "1px",
                    transition: "color 0.3s ease",
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  className={"desc content-text"}
                  sx={{
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "18px",
                      lg: "20px",
                      xl: "22px",
                    },
                    color: "#525252",
                    transition: "color 0.3s ease",
                    textAlign: "center",
                    lineHeight: { xs: 1.3, sm: 1.4, md: 1.5, lg: 1.6 },
                  }}
                >
                  At Jayant Snacks, we are committed to delivering high-quality,
                  innovative, and sustainable products that enhance the lives of
                  our customers. Our team is dedicated to excellence, and we
                  strive to create a positive impact in the communities we
                  serve.
                </Typography>
              </Box>
            </Box>

            {/* Third Box - Logo */}
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
                minHeight: { xs: 300, sm: "100%" },
                py: { xs: 2, sm: 2, md: 3 },
                cursor: "pointer",
                "&:hover::before": {
                  opacity: 0.2,
                  transform: "rotate(-45deg) translateY(100%)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-45%",
                  left: "-50%",
                  width: "200%",
                  height: "200%",
                  transform: "rotate(-45deg)",
                  transition: "all 0.7s ease",
                  opacity: 0,
                  zIndex: 1,
                },
                "&:hover .image": {
                  transform: "scale(1.1) !important",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                },
              }}
            >
              <Box
                component="img"
                data-aos="fade-left"
                data-aos-delay="600"
                src={Img2}
                alt="PAPPADUM Brand"
                className={"image"}
                sx={{
                  width: "auto",
                  maxWidth: { xs: "65%", sm: "60%", md: "55%" },
                  maxHeight: { xs: "50%", sm: "55%", md: "60%" },
                  objectFit: "contain",
                  filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                  zIndex: 2,
                  position: "relative",
                  transition: "0.6s !important",
                  transformOrigin: "center center",
                  "&:hover": {
                    transform: "scale(1.1) !important",
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default OurCompany;

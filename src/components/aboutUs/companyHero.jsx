import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "aos/dist/aos.css";
import factoryImg from "../../assets/images/home/heroSection/factory.png";
import pennePellet from "../../assets/company/2D_0638.png";
import wheelPellet from "../../assets/company/2D_0565.png";
import pyramidPellet from "../../assets/company/3D_0571.png";
import wafflePellet from "../../assets/company/2D_0671.png";

function CompanyHero() {
  return (
    <Box
      sx={{
        backgroundColor: "#C37A3D",
        minHeight: { xs: "70vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: { xs: 6, md: 8 },
      }}
    >
      {/* Decorative Pellets */}
      <Box
        component="img"
        src={wheelPellet}
        alt="Wheel Pellet"
        sx={{
          position: "absolute",
          top: { xs: "10%", md: "15%" },
          left: { xs: "5%", md: "8%" },
          width: { xs: "70px", md: "110px" },
          height: "auto",
          opacity: 0.55,
          filter: "brightness(1.12) saturate(1.1)",
          dropShadow: "0 10px 18px rgba(0,0,0,0.18)",
          zIndex: 1,
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
          width: { xs: "60px", md: "95px" },
          height: "auto",
          opacity: 0.55,
          filter: "brightness(1.12) saturate(1.1)",
          dropShadow: "0 10px 18px rgba(0,0,0,0.18)",
          zIndex: 1,
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
          width: { xs: "65px", md: "105px" },
          height: "auto",
          opacity: 0.55,
          filter: "brightness(1.12) saturate(1.1)",
          dropShadow: "0 10px 18px rgba(0,0,0,0.18)",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={wafflePellet}
        alt="Waffle Pellet"
        sx={{
          position: "absolute",
          bottom: { xs: "12%", md: "18%" },
          left: { xs: "8%", md: "12%" },
          width: { xs: "65px", md: "105px" },
          height: "auto",
          opacity: 0.55,
          filter: "brightness(1.12) saturate(1.1)",
          dropShadow: "0 10px 18px rgba(0,0,0,0.18)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Factory Illustration - Large white outline on top */}
          <Box
            component="img"
            src={factoryImg}
            alt="Factory"
            sx={{
              width: { xs: "400px", sm: "500px", md: "700px", lg: "800px" },
              height: "auto",
              opacity: 0.15,
              mb: { xs: 2, md: 3 },
              zIndex: 1,
              mixBlendMode: "screen",
            }}
            data-aos="fade-down"
          />

          {/* Jeppy Text - Overlaying the factory */}

          {/* Pioneers in Pellet Technology - Below */}
          <Typography
            className="jua"
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "38px", sm: "50px", md: "76px", lg: "84px" },
              lineHeight: 1.2,
              color: "white",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              position: "relative",
              zIndex: 2,
            }}
          >
            Pioneers in
          </Typography>
          <Typography
            className="jua"
            data-aos="fade-up"
            data-aos-delay="400"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "38px", sm: "50px", md: "76px", lg: "84px" },
              lineHeight: 1.2,
              color: "white",
              textAlign: "center",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              position: "relative",
              zIndex: 2,
            }}
          >
            Pellet Technology
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CompanyHero;

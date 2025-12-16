import React from "react";
import { Box, Container, Typography } from "@mui/material";
import "aos/dist/aos.css";
import wafflePellet from "../../assets/images/home/heroSection/png/2D Potato_0633.png";

function CompanyWhoWeAre() {
  return (
    <Box
      sx={{
        backgroundColor: "#C37A3D",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Pellet */}
      <Box
        component="img"
        src={wafflePellet}
        alt="Waffle Pellet"
        sx={{
          position: "absolute",
          bottom: { xs: "5%", md: "10%" },
          left: { xs: "5%", md: "8%" },
          width: { xs: "50px", md: "75px" },
          height: "auto",
          opacity: 0.3,
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "12px",
            padding: { xs: "30px", sm: "40px", md: "50px", lg: "60px" },
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          }}
          data-aos="fade-up"
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "32px", md: "36px" },
              color: "#F97316",
              fontWeight: 700,
              mb: 4,
              fontFamily: "Inter",
              textAlign: "center",
            }}
          >
            Who We Are?
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: { xs: "26px", sm: "30px", md: "36px" },
              color: "#000000",
              fontWeight: 400,
              mb: 3,
              textAlign: "center",
            }}
          >
            At Jayant Snacks and Beverages Pvt. Ltd., we've been shaping the
            future of Papad Snacks since 1987. Popularly known by our brands
            JEPPY and WOW, we are a leading manufacturer and exporter of
            ready-to-fry and air-roast Papad Snacks, headquartered in Rajkot,
            India.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              lineHeight: { xs: "26px", sm: "30px", md: "36px" },
              color: "#000000",
              fontWeight: 400,
              textAlign: "center",
            }}
          >
            With 40+ years of expertise, we've mastered the art of creating
            delicious and innovative snacks from cereals, lentils, vegetables,
            and multigrain flours. Our portfolio includes 2D, 3D, laminated, and
            punched shapes loved by customers across the globe.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default CompanyWhoWeAre;

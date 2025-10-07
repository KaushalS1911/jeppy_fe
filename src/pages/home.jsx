import React from "react";
import { Box } from "@mui/material";
import Products from "../components/home/products.jsx";
import Milestone from "../components/home/milestone.jsx";
import OurCompany from "../components/home/ourCompany.jsx";
import AboutUs from "../components/home/aboutUs.jsx";
import HeroSection from "../components/home/heroSection.jsx";
import OurSolution from "../components/home/ourSolution.jsx";
import OurPartners from "../components/home/ourPartners.jsx";
import Certification from "../components/home/certification.jsx";
function Home() {
  return (
    <Box sx={{ position: "relative" }}>
      <HeroSection />
      {/*<OurCompany/>*/}
      {/*<Milestone/>*/}
      {/*<Products/>*/}
      {/*<OurSolution />*/}
      {/*<AboutUs/>*/}
      {/*<OurPartners />*/}
      {/*<Certification/>*/}
    </Box>
  );
}

export default Home;

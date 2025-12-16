import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Contact from "../components/contactUs/contact.jsx";

function Contactus() {
  return (
    <Box sx={{ backgroundColor: "#C37A3D", minHeight: "100vh", pt: 20 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: "center", py: { xs: 4, md: 6 }, px: 2 }}>
        <Typography
          className="jua"
          sx={{
            fontFamily: "Jua",
            fontWeight: 700,
            fontSize: { xs: "32px", sm: "42px", md: "56px", lg: "64px" },
            color: "white",
            lineHeight: 1.2,
            mb: 0.5,
          }}
        >
          Shape The Future of
        </Typography>
        <Typography
          className="jua"
          sx={{
            fontFamily: "Jua",
            fontWeight: 700,
            fontSize: { xs: "48px", sm: "64px", md: "80px", lg: "96px" },
            color: "white",
            lineHeight: 1.2,
          }}
        >
          SNACKING
        </Typography>
      </Box>

      {/* Main Content */}
      <Contact />
    </Box>
  );
}

export default Contactus;

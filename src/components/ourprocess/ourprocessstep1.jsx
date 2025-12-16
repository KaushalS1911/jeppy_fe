import React, { useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import imgstep1 from "../../assets/images/ourprocess/ManufacturingProcessSteps/RawMaterialProcurement.png";
import "aos/dist/aos.css";

function Ourprocessstep1() {
  const [isHovered, setIsHovered] = useState(false);

  // Shine effect
  const shineEffectStyles = {
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",
    boxShadow: "0 6px 30px rgba(0,0,0,0.1)",
    transition: "transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-75%",
      width: "50%",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 100%)",
      transform: "skewX(-25deg)",
      transition: "all 0.75s",
      zIndex: 2,
    },
    "&:hover::before": {
      left: "125%",
    },
    "&:hover": {
      transform: "scale(1.02)",
      boxShadow: "0 8px 40px rgba(0,0,0,0.15)",
    },
  };

  const data = [
    {
      steps: "STEP 1",
      title: "Raw Material Selection",
      points: [
        "Sourced from trusted suppliers (potato, lentil, soya, rice, etc).",
        "Tested for moisture, density, ash content, pH, color & viscosity.",
        "Only approved materials proceed to production.",
      ],
      image: imgstep1,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, sm: 6, md: 10, lg: 12 },
          }}
        >
          {/* Text Section */}
          <Box
            data-aos="fade-right"
            data-aos-duration="1200"
            sx={{
              flex: 1,
              maxWidth: { xs: "100%", md: "600px", lg: "700px" },
              px: { xs: 1, sm: 2, md: 3 },
            }}
          >
            <Typography
              className="jua"
              variant="subtitle2"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                color: "rgba(242, 138, 30, 1)",
                fontWeight: 400,
                mb: 1,
              }}
            >
              {item.steps}
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "28px", sm: "36px", md: "44px", xl: "50px" },
                lineHeight: 1.3,
                mb: 3,
              }}
            >
              {item.title}
            </Typography>

            <List
              dense
              sx={{
                listStyleType: "disc",
                pl: 3,
              }}
            >
              {item.points.map((point, pointIndex) => (
                <ListItem
                  key={pointIndex}
                  sx={{
                    display: "list-item",
                    py: 0.5,
                  }}
                >
                  <ListItemText
                    primary={point}
                    primaryTypographyProps={{
                      sx: {
                        fontSize: { xs: "16px", sm: "18px", md: "20px" },
                        fontWeight: 500,
                        lineHeight: 1.5,
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Image Section */}
          <Box
            data-aos="fade-left"
            data-aos-duration="1200"
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: {
                xs: "100%",
                sm: "550px",
                md: "700px",
                lg: "850px",
                xl: "1000px",
              },
              ...shineEffectStyles,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "16px",
                display: "block",
                transition: "transform 0.6s ease",
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            />
          </Box>
        </Box>
      ))}
    </Container>
  );
}

export default Ourprocessstep1;

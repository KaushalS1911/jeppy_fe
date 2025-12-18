import React from "react";
import { Box, Typography, Container, Grid, useTheme } from "@mui/material";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import pennePellet from "../../assets/company/2D_0638.png";
import wheelPellet from "../../assets/company/2D_0565.png";
import pyramidPellet from "../../assets/company/3D_0571.png";
import wafflePellet from "../../assets/company/2D_0671.png";

const stats = [
  { value: "150", suffix: "+", label: "Shapes" },
  { value: "1000", suffix: "", label: "of Formulations" },
  { value: "250", suffix: "", label: "MT / Day Production" },
  { value: "5", suffix: "", label: "Manufacturing Facilities" },
  { value: "400", suffix: "", label: "Products Designed and Shipped" },
  { value: "200", suffix: "+", label: "Satisfied Customers" },
];

function CompanyStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const theme = useTheme();

  return (
    <Box
      ref={ref}
      sx={{
        backgroundColor: "#FFFFFF",
        py: { xs: 6, md: 8 },
        position: "relative",
        overflow: "hidden",
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
          width: { xs: "50px", md: "80px" },
          height: "auto",
          opacity: 0.2,
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
          width: { xs: "40px", md: "60px" },
          height: "auto",
          opacity: 0.2,
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
          width: { xs: "45px", md: "70px" },
          height: "auto",
          opacity: 0.2,
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={wafflePellet}
        alt="Waffle Pellet"
        sx={{
          position: "absolute",
          bottom: { xs: "10%", md: "15%" },
          left: { xs: "8%", md: "10%" },
          width: { xs: "35px", md: "55px" },
          height: "auto",
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2, px: 0 }}>
        <Grid container spacing={4} alignItems="center">
          {/* 40 Years - Large Circle */}
          <Grid item size={{ xs: 12, md: 4, lg: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  width: { xs: 180, md: 250, xl: 280 },
                  height: { xs: 180, md: 250, xl: 280 },
                  borderRadius: "50%",
                  bgcolor: "rgba(249, 115, 22, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: { xs: 150, md: 200, xl: 230 },
                    height: { xs: 150, md: 200, xl: 230 },
                    borderRadius: "50%",
                    bgcolor: "#F97316",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: "60px", md: "90px", xl: "100px" },
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    40
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "20px", md: "24px", xl: "28px" },
                      fontWeight: 500,
                      letterSpacing: "1px",
                    }}
                  >
                    Years
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Other Statistics */}
          <Grid item size={{ xs: 12, md: 8, lg: 9 }}>
            <Grid container spacing={3}>
              {stats.map((item, index) => (
                <Grid item size={{ xs: 6, sm: 4 }} key={index}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: {
                          xs: "32px",
                          sm: "40px",
                          md: "48px",
                          lg: "56px",
                        },
                        fontWeight: 700,
                        color: "#F97316",
                      }}
                    >
                      {inView && <CountUp end={+item.value} duration={2.5} />}
                      {!inView && 0}
                      {item.suffix}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "14px", md: "16px", lg: "18px" },
                        fontWeight: 500,
                        color: "#000000",
                        whiteSpace: "pre-line",
                        mt: 1,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CompanyStats;

import React from 'react';
import { Box, Container, Typography, Grid } from "@mui/material";
import 'aos/dist/aos.css';
import certificate1 from '../../assets/images/global/certificates/aped.PNG';
import certificate2 from '../../assets/images/global/certificates/fssai-certi.PNG';
import certificate3 from '../../assets/images/global/certificates/halal.PNG';
import certificate4 from '../../assets/images/global/certificates/isoqar.PNG';
import wafflePellet from "../../assets/images/home/heroSection/png/2D Potato_0633.png";
import pennePellet from "../../assets/images/home/heroSection/png/2D PENNE.png";

function CompanyCertifications() {
    const certificates = [
        { src: certificate1, alt: "APEDA" },
        { src: certificate2, alt: "FSSAI" },
        { src: certificate3, alt: "Halal India" },
        { src: certificate4, alt: "ISOQAR Registered" },
    ];

    return (
        <Box
            sx={{
                backgroundColor: "#C37A3D",
                py: { xs: 6, md: 8 },
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Decorative Pellets */}
            <Box
                component="img"
                src={wafflePellet}
                alt="Waffle Pellet"
                sx={{
                    position: "absolute",
                    bottom: { xs: "5%", md: "10%" },
                    right: { xs: "5%", md: "8%" },
                    width: { xs: "50px", md: "75px" },
                    height: "auto",
                    opacity: 0.3,
                    zIndex: 1,
                }}
            />
            <Box
                component="img"
                src={pennePellet}
                alt="Penne Pellet"
                sx={{
                    position: "absolute",
                    top: { xs: "10%", md: "15%" },
                    right: { xs: "8%", md: "12%" },
                    width: { xs: "45px", md: "65px" },
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
                        padding: { xs: "30px", sm: "40px", md: "50px" },
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                    }}
                    data-aos="fade-up"
                >
                    <Typography
                        className="monserrat"
                        sx={{
                            fontSize: { xs: "28px", sm: "32px", md: "36px" },
                            color: "#F97316",
                            fontWeight: 700,
                            mb: 4,
                            textAlign: "center",
                        }}
                    >
                        Certifications
                    </Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {certificates.map((cert, index) => (
                            <Grid item size={{ xs: 6, sm: 4, md: 3 }} key={index}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                >
                                    <Box
                                        sx={{
                                            transition: "0.6s",
                                            "&:hover": {
                                                transform: "scale(1.1)",
                                            },
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={cert.src}
                                            alt={cert.alt}
                                            sx={{
                                                width: { xs: "150px", sm: "180px", md: "220px" },
                                                height: "auto",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default CompanyCertifications;




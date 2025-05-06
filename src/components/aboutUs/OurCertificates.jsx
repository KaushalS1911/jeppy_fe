import React from 'react';
import { Box, Container, Typography, Grid } from "@mui/material";
import certificate1 from '../../assets/images/aboutus/certificates/167-1671625_halal-certification-services-halal-india-logo (1).png';
import certificate2 from '../../assets/images/aboutus/certificates/WhatsApp Image 2025-05-06 at 10.55.42 AM.jpeg';
import certificate3 from '../../assets/images/aboutus/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM (1).jpeg';
import certificate4 from '../../assets/images/aboutus/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM.jpeg';
import certificate5 from '../../assets/images/aboutus/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM (2).jpeg';

function OurCertificates() {
    return (
        <Box sx={{ padding: "50px 0" }}>
            <Container maxWidth="xl">
                <Box>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: "36px",
                            textAlign: "center",
                            lineHeight: "65px"
                        }}
                    >
                        Our Certificates
                    </Typography>
                </Box>
                <Grid container spacing={4} justifyContent="center" sx={{ marginTop: 2 }}>
                    {[certificate1, certificate2, certificate3, certificate4 ,certificate5].map((cert, index) => (
                        <Grid item size={{xs:12 ,  sm:6 , lg:2}} key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <img
                                    src={cert}
                                    alt={`certificate-${index + 1}`}
                                    style={{ height: "300px", width: "300px", objectFit: "contain" }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default OurCertificates;

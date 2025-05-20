import React from 'react';
import {Box, Container, Typography, Grid} from "@mui/material";
import 'aos/dist/aos.css';
import certificate1
    from '../../assets/images/global/certificates/167-1671625_halal-certification-services-halal-india-logo (1).png';
import certificate2 from '../../assets/images/global/certificates/unnamed.png';
import certificate3 from '../../assets/images/global/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM (1).jpeg';
import certificate4 from '../../assets/images/global/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM.jpeg';
import certificate5 from '../../assets/images/global/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM (2).jpeg';

function OurCertificates() {

    return (
        <Box sx={{padding: "50px 0"}}>
            <Container maxWidth="xl">
                <Typography
                    className={'monserrat'}
                    sx={{
                        fontWeight: 700,
                        fontSize: "36px",
                        textAlign: "center",
                        lineHeight: "65px"
                    }}
                    data-aos="fade-down"
                >
                    Our Certificates
                </Typography>
                <Grid container spacing={4} justifyContent="center" sx={{marginTop: 5}}>
                    {[certificate1, certificate2, certificate3, certificate4, certificate5].map((cert, index) => (
                        <Grid item size={{xs: 12, sm: 6, lg: 4, xl: 2}} key={index}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                                data-aos="zoom-in"
                                data-aos-delay={index * 100}
                            >
                                <Box sx={{
                                    transition: ".6s",
                                    '&:hover': {
                                        transform: "scale(1.1) !important",
                                    }
                                }}>
                                    <img
                                        src={cert}
                                        alt={`certificate-${index + 1}`}
                                        style={{
                                            width: 220,
                                            height: 220,
                                            objectFit: "cover"
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default OurCertificates;
import React from 'react';
import {Box, Container, Typography, Grid} from "@mui/material";
import 'aos/dist/aos.css';
import certificate1 from '../../assets/images/global/certificates/aped.PNG';
import certificate2 from '../../assets/images/global/certificates/fssai-certi.PNG';
import certificate3 from '../../assets/images/global/certificates/halal.PNG';
import certificate4 from '../../assets/images/global/certificates/isoqar.PNG';

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
                    {[certificate1, certificate2, certificate3, certificate4].map((cert, index) => (
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
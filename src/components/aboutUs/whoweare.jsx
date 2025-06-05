import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import {Box, Typography, Grid, Container} from '@mui/material';
import palletimg from "../../assets/images/aboutus/pallets.jpg";
import 'aos/dist/aos.css';

function Whoweare() {
    useEffect(() => {
  AOS.init({ once: true });
}, []);
    return (
        <>
            <Box>
                <Box
                    sx={{
                        backgroundColor: 'rgba(242, 138, 30, 1)',
                    }}
                >
                    <Typography
                        className={'monserrat'}
                        sx={{
                            fontWeight: 700,
                            fontSize: {md: "36px", sm: "32px", xs: "28px"},
                            textAlign: 'center',
                            color: 'white',
                            py: {
                                xs: 3,
                                sm: 3,
                                md: 3,
                                lg: 5,
                                xl: 5,
                            }
                        }}
                        data-aos="fade-down"
                    >
                        Who we are
                    </Typography>
                    <Container
                        maxWidth="xl"
                        sx={{
                            py: {
                                xs: 0,
                                sm: 3,
                                md: 4,
                                lg: 5,
                                xl: 5,
                            },
                        }}
                    >
                        <Grid container spacing={5}>
                            <Grid item xs={12} lg={6}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {xs: '16px', sm: '20px', md: '22px'},
                                        lineHeight: 2,
                                        color: 'white',
                                    }}
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                >
                                    At Jayant Snacks and Beverages Pvt. Ltd., we've been shaping the future of Papad
                                    Snacks since 1987. Popularly known by our brands JEPPY and WOW, we are a leading
                                    manufacturer and exporter of ready-to-fry and air-roast Papad Snacks, headquartered
                                    in
                                    Rajkot, India.
                                </Typography>
                            </Grid>

                            <Grid item xs={12} lg={6}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: {xs: '32px', sm: '36px', md: '40px'},
                                        textAlign: {xs: 'center', lg: 'right'},
                                        color: 'white',
                                        mt: {
                                            md: 0,
                                            lg: 10,
                                            xl: 10,
                                        },
                                    }}
                                    data-aos="fade-left"
                                    data-aos-delay="300"
                                >
                                    Established in 1987
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box
                    sx={{
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'block',
                            lg: 'none',
                            xl: 'none',
                        },
                    }}
                    data-aos="fade-up"
                >
                    <Box
                        component="img"
                        src={palletimg}
                        alt="Pallets"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                <Box>
                    <Container
                        maxWidth="xl"
                        sx={{
                            py: {
                                xs: 3,
                                sm: 3,
                                md: 4,
                                lg: 5,
                                xl: 5,
                            },
                        }}
                    >
                        <Grid container spacing={5}>
                            <Grid item size={{xs: 12, lg: 6}}>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {xs: '16px', sm: '20px', md: '22px'},
                                        marginBottom: '24px',
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    With 30+ years of expertise, we've mastered the art of creating delicious and
                                    innovative snacks from cereals, lentils, vegetables, and multigrain flours. Our portfolio
                                    includes 2D, 3D, laminated, and punched shapes loved by customers across the
                                    globe.
                                </Typography>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {xs: '16px', sm: '20px', md: '22px'},
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay="450"
                                >
                                    Backed by a strong R&D culture, we conduct research on 100–150 new products annually,
                                    developing over 300 unique shapes and thousands of formulations to
                                    date.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Box sx={{position: 'relative'}}>
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'none',
                            md: 'none',
                            lg: 'block',
                            xl: 'block',
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={palletimg}
                        alt="Pallets"
                        sx={{
                            width: {
                                xs: '100%',
                                sm: '100%',
                                md: '600px',
                                lg: '600px',
                                xl: '800px',
                            },
                            height: {
                                xs: 'auto',
                                sm: 'auto',
                                md: 'auto',
                                lg: '561px',
                                xl: '561px',
                            },
                            objectFit: 'cover',
                            position: 'absolute',
                            bottom: {
                                xs: 200,
                                sm: 250,
                                md: 300,
                                lg: "-20px",
                                xl: "-20px",
                            },
                            right: {
                                xs: 0,
                                md: 0,
                            },
                            py: {
                                xs: 4,
                                sm: 6,
                                md: 8,
                            },
                            zIndex: 10,
                        }}
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="1500"
                    />
                </Box>
            </Box>
        </>
    );
}

export default Whoweare;
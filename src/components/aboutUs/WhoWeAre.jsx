import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import aboutcomponent2 from "../../assets/images/home/About/pretzels-chips-crackers-popcorn-bowls 1.png"

const WhoWeAre = () => {
    return (
        <Box sx={{ width: '100%', bgcolor: '#fff' }}>
            {/* Top Section with Orange Background */}
            <Box sx={{ bgcolor: '#f58220',position:"relative", py: { xs: 4, md: 6 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        {/* Text Left Side */}
                        <Grid item xs={12} md={6}>
                            <Typography
                                variant="h5"
                                sx={{ fontWeight: 'bold', color: '#fff', mb: 2 ,textAlign:"center",paddingBottom:{lg:"50px",xs:"20px"}}}
                            >
                                Who we are
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '16px' }}>
                                At Jayant Snacks and Beverages Pvt. Ltd., we’ve been shaping the future of Papad Snacks since 1987.
                                <br />
                                Popularly known by our brands JEPPY and WOW, we are a leading manufacturer and exporter of ready-to-fry
                                and air-roast Papad Snacks, headquartered in Rajkot, India.
                            </Typography>
                        </Grid>

                        {/* Image Right Side */}
                        <Grid item xs={12} md={6}>
                            {/*<Box sx={{position:"absolute",top:"50%",left:"50%"}}>*/}
                            <Box sx={{margin:"auto"}}>
                                <Typography
                                    sx={{
                                        textAlign:"center",
                                        padding:"10px",
                                        fontFamily: 'cursive',
                                        fontSize: '28px',
                                        color: '#fff',
                                        mt: 4,
                                    }}
                                >
                                    Established in 1987
                                </Typography>
                                <Box
                                    component="img"
                                    src={aboutcomponent2} // Replace with actual image path
                                    alt="Snacks"
                                    sx={{
                                        width: '100%',
                                        borderRadius: 0,
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* White Section Below */}
            <Box sx={{ bgcolor: '#f5f5f5', py: { xs: 4, md: 6 } }}>
                <Container maxWidth="lg">
                    <Typography sx={{ fontSize: '16px', mb: 3 }}>
                        With 30+ years of expertise, we’ve mastered the art of creating delicious and innovative snacks from cereals,
                        lentils, vegetables, and multigrain flours. Our portfolio includes 2D, 3D, laminated, and punched shapes loved
                        by customers across the globe.
                    </Typography>
                    <Typography sx={{ fontSize: '16px' }}>
                        Backed by a strong R&D culture, we conduct research on 100–150 new products annually, developing over 300
                        unique shapes and thousands of formulations to date.
                    </Typography>
                </Container>
            </Box>
        </Box>
    );
};

export default WhoWeAre;

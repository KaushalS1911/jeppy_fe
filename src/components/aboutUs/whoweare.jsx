import React from 'react';
import {Box, Typography, Grid, Container} from '@mui/material';
import palletimg from "../../assets/images/aboutus/pallets.jpg";
import { motion } from 'framer-motion';

function Whoweare() {

    return (
        <>
            {/* Header Section */}
            <Box sx={{ backgroundColor: 'rgba(242, 138, 30, 1)' }}>
                <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
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
                    >
                        Who we are
                    </Typography>
                </motion.div>

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
                        <Grid item size={{xs: 12, lg: 6}}>
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {xs: '16px', sm: '20px', md: '22px'},
                                        lineHeight: 2,
                                        color: 'white',
                                    }}
                                >
                                    At Jayant Snacks and Beverages Pvt. Ltd., we've been shaping the future of Papad
                                    Snacks since 1987. Popularly known by our brands JEPPY and WOW, we are a leading
                                    manufacturer and exporter of ready-to-fry and air-roast Papad Snacks, headquartered
                                    in Rajkot, India.
                                </Typography>
                            </motion.div>
                        </Grid>

                        <Grid item size={{xs: 12, lg: 6}}>
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 400,
                                        fontSize: {xs: '32px', sm: '36px', md: '40px'},
                                        textAlign: {xs: 'center', lg: 'center'},
                                        color: 'white',
                                        mt: {
                                            md: 0,
                                            lg: 10,
                                            xl: 0,
                                        },
                                        mb: {
                                            lg: 3,
                                            xl: 3,
                                        },
                                    }}
                                >
                                    Established in 1987
                                </Typography>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Mobile Image Section */}
            <Container maxWidth="xl" sx={{ px: 0 }}>
                <Grid container>
                    <Grid 
                        item 
                        size={{xs: 12}} 
                        sx={{
                            display: {
                                xs: 'block',
                                sm: 'block',
                                md: 'block',
                                lg: 'none',
                                xl: 'none',
                            },
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
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
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>

            {/* Content Section with Desktop Image */}
            <Box sx={{ position: 'relative' }}>
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
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {xs: '16px', sm: '20px', md: '22px'},
                                        marginBottom: '24px',
                                    }}
                                >
                                    With 30+ years of expertise, we've mastered the art of creating delicious and
                                    innovative snacks from cereals, lentils, vegetables, and multigrain flours. Our portfolio
                                    includes 2D, 3D, laminated, and punched shapes loved by customers across the
                                    globe.
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.45 }}
                                viewport={{ once: true }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: {xs: '16px', sm: '20px', md: '22px'},
                                    }}
                                >
                                    Backed by a strong R&D culture, we conduct research on 100–150 new products annually,
                                    developing over 300 unique shapes and thousands of formulations to
                                    date.
                                </Typography>
                            </motion.div>
                        </Grid>

                        {/* Desktop Image Grid - Hidden on mobile */}
                        <Grid 
                            item 
                            size={{lg: 6}}
                            sx={{
                                display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'none',
                                    lg: 'block',
                                    xl: 'block',
                                },
                                position: 'relative'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <Box
                                    component="img"
                                    src={palletimg}
                                    alt="Pallets"
                                    sx={{
                                        width: {
                                            lg: '600px',
                                            xl: '800px',
                                        },
                                        height: {
                                            lg: '561px',
                                            xl: '561px',
                                        },
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        bottom: "-20px",
                                        right: 0,
                                        zIndex: 10,
                                        display: 'flex',
                                    }}
                                />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Whoweare;
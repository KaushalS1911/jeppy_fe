import React from 'react';
import {Box, Typography, Container, Grid, IconButton, useMediaQuery, useTheme} from "@mui/material";
import Img1 from "../../assets/images/contactUs/f6132242b4a9d1dc06825a76f30df44905f68c64.png";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ overflowX: 'hidden'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
            }}>
                {/* Map Section (50%) */}
                <Box sx={{
                    width: isMobile ? '100%' : '40%',
                    height: isMobile ? '50vh' : '100%',
                    position: 'relative'
                }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.262289338461!2d70.79424565!3d22.29314745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sJayant%20Food%20Products!5e0!3m2!1sen!2sin!4v1651658239972!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Jayant Snacks & Beverages Location"
                    />
                </Box>

                {/* Contact Information Section (50%) */}
                <Box sx={{
                    width: isMobile ? '100%' : '60%',
                    height: isMobile ? '100%' : '100%',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    // flexDirection: 'column',
                    // justifyContent: 'center',
                    py: 8,
                    position: 'relative'
                }}>
                    {/*<Container maxWidth="sm">*/}
                    <Box sx={{
                        px: {lg: 15, sm: 5, xs: 2, md: 8}
                    }}>
                        <Box sx={{
                            fontSize: "28px",
                            fontWeight: "600",
                            lineHeight: "100%",
                        }}>
                            Contact Information
                        </Box>
                        <Box sx={{
                            fontSize: "18px",
                            fontWeight: "400",
                            lineHeight: "100%",
                            pt: 1,
                            pb: 5
                        }}>
                            Say something to start a live chat!
                        </Box>

                        <Box sx={{my: 4}}>
                            {/* Phone */}
                            <Box sx={{display: 'flex', alignItems: 'center', mb: 4}}>
                                <PhoneIcon sx={{mr: 2, color: 'black'}}/>
                                <Typography>+91 75758 08749</Typography>
                            </Box>

                            {/* Email */}
                            <Box sx={{display: 'flex', alignItems: 'center', mb: 4}}>
                                <EmailIcon sx={{mr: 2, color: 'black'}}/>
                                <Typography>hello@jeppy.in</Typography>
                            </Box>

                            {/* Address */}
                            <Box sx={{display: 'flex', alignItems: 'flex-start', mb: 4}}>
                                <LocationOnIcon sx={{mr: 2, mt: 0.5, color: 'black'}}/>
                                <Typography>
                                    JAYANT SNACKS & BEVERAGES PVT. LTD.<br/>
                                    27 - NH, Ring Road, Near Mira Udhyog, Nr.<br/>
                                    Bansidhar Weigh Bridge, Rajkot -<br/>
                                    360003 (Gujarat) India.
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{mt: {md:18,xs:10,sm:13}, display: 'flex', gap: 2, mb: 5}}>
                            <IconButton aria-label="Facebook" size="large">
                                <FacebookIcon sx={{color: 'black'}}/>
                            </IconButton>
                            <IconButton aria-label="Twitter" size="large">
                                <TwitterIcon sx={{color: 'black'}}/>
                            </IconButton>
                            <IconButton aria-label="LinkedIn" size="large">
                                <LinkedInIcon sx={{color: 'black'}}/>
                            </IconButton>
                            <IconButton aria-label="Instagram" size="large">
                                <InstagramIcon sx={{color: 'black'}}/>
                            </IconButton>
                        </Box>
                    </Box>
                    {/*</Container>*/}

                    {/* Snack Image */}

                </Box>
            </Box>
            <Box sx={{position: 'relative'}}>
                <Box sx={{
                    position: 'absolute',
                    bottom: '-190px',
                    right: "-8%",
                    width: '27%',
                    height: 'auto',
                    display: {xs: 'none', md: 'block'}
                }}>
                    <img
                        src={Img1}
                        alt="Snacks"
                        style={{
                            width: '100%',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            </Box>
            <Box sx={{padding: "10px 0px"}}>
                <Container maxWidth={"xl"}>
                    <Box sx={{
                        display: 'flex',
                        fontSize: '36px',
                        fontWeight: "700",
                        lineHeight: "65px",
                        justifyContent: 'center',
                        textAlign: 'center',
                        pt: 5,
                        pb: 0
                    }}>
                        Let’s Connect on YT
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: {xs: "column", md: "row"},
                            gap: 2,
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "65px",
                            // paddingBottom: "30px",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                aspectRatio: "16/9",
                                paddingRight: {md: "18px", sm: "none"},
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/5bwGLg6Y52M"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Box>

                        <Box
                            sx={{
                                width: "100%",
                                maxWidth: "100%",
                                aspectRatio: "16/9",
                                paddingRight: {md: "14px", sm: "none"},
                            }}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/pZsd9cHwzIg"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </Box>

                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default Contact;
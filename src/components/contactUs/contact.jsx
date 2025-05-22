import React, {useState} from 'react';
import {Box, Typography, Container, Grid, IconButton, useMediaQuery, useTheme} from "@mui/material";
import Img1 from "../../assets/images/contactUs/f6132242b4a9d1dc06825a76f30df44905f68c64.png";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "react-router-dom";

const icons = [
    { icon: <FacebookIcon sx={{ fontSize: '35px' }} />, color: '#0866FF ', label: 'Facebook' ,link: 'https://www.facebook.com/WOW.Jeppy'},
    { icon: <LinkedInIcon sx={{ fontSize: '35px' }} />, color: '#0077B5', label: 'LinkedIn' ,link: 'https://www.linkedin.com/company/jayant-snacks-and-beverages-private-limited'},
    { icon: <InstagramIcon sx={{ fontSize: '35px' }} />, color: '#F16B66', label: 'Instagram' ,link: 'https://www.instagram.com/jeppy.wow'},
];

function Contact() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                width: '100%',
            }}>
                <Box
                    sx={{
                        width: isMobile ? '100%' : '50%',
                        height: isMobile ? '50vh' : 'auto',
                    }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.2679325523645!2d70.82092687602162!3d22.267838244069882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b584d2aba6c3%3A0xfa831224b3c5ed4a!2sJeppy!5e0!3m2!1sen!2sin!4v1746606002688!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Jayant Snacks & Beverages Location">
                    </iframe>
                </Box>

                <Box sx={{
                    width: isMobile ? '100%' : '60%',
                    height: isMobile ? '100%' : '100%',
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    py: 8,
                    position: 'relative'
                }}>
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
                            <Box sx={{display: 'flex', alignItems: 'center', mb: 4}}>
                                <PhoneIcon sx={{mr: 2, color: 'black'}}/>
                                <Typography>+91 75758 08749</Typography>
                            </Box>

                            <Box sx={{display: 'flex', alignItems: 'center', mb: 4}}>
                                <EmailIcon sx={{mr: 2, color: 'black'}}/>
                                <Typography sx={{letterSpacing:"1px"}}>hello@jeppy.in</Typography>
                            </Box>

                            <Box sx={{display: 'flex', alignItems: 'flex-start', mb: 4}}>
                                <LocationOnIcon sx={{mr: 2, mt: 0.5, color: 'black'}}/>
                                <Typography sx={{letterSpacing:"1px"}}>
                                    JAYANT SNACKS & BEVERAGES PVT. LTD.<br/>
                                    27 - NH, Ring Road, Near Mira Udhyog, Nr.<br/>
                                    Bansidhar Weigh Bridge, Rajkot -<br/>
                                    360003 (Gujarat) India.
                                </Typography>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                mt: { md: 18, xs: 10, sm: 13 },
                                display: 'flex',
                                gap: 2,
                                mb: 5,
                            }}
                        >
                            {icons.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        overflow: 'hidden',
                                        position: 'relative',
                                        backgroundColor: '#fff',
                                        border: '3px solid #fff',
                                        textAlign: 'center',
                                        transition: '0.5s',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Hover Background */}
                                    <Box
                                        sx={{
                                            content: '""',
                                            position: 'absolute',
                                            top: hoveredIndex === index ? 0 : '100%',
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: item.color,
                                            transition: '0.5s',
                                            zIndex: 1,
                                        }}
                                    />
                                    {/* Icon */}
                                    <IconButton
                                        component={Link}
                                        to={item.link}
                                        aria-label={item.label}
                                        size="large"
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            position: 'relative',
                                            zIndex: 2,
                                            color: hoveredIndex === index ? '#fff' : '#262626',
                                            transition: '0.5s',
                                            transform: hoveredIndex === index ? 'rotateY(360deg)' : 'rotateY(0deg)',
                                        }}
                                    >
                                        {item.icon}
                                    </IconButton>
                                </Box>
                            ))}
                        </Box>
                    </Box>

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
        </Box>
    );
}

export default Contact;
import React, { useEffect } from 'react';
import {Box, Typography, useTheme} from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Img1 from "../../assets/images/home/our Company/7b7ab9dcec7f396d5afb549ee14437deb4d7e466_720-removebg-preview_480.png";
import Img2 from "../../assets/images/home/our Company/b1f621b7f07c140cc09e7407cebcd81863369f90_720-removebg-preview_480.png";
import Img3 from "../../assets/images/global/jeepy-logo.png";

function OurCompany() {
    const theme = useTheme();
    return (
        <>
            <Box>
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "center",
                            alignItems: "stretch",
                            minHeight: { xs: 180, sm: 240, md: 300, lg: 400 },
                            height: "auto",
                        }}
                    >
                        {/* First Box */}
                        <Box
                            sx={{
                                background: `${theme.palette.saffron}`,
                                width: { xs: "100%", md: "50%" },
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 'auto',
                                minHeight: '100%',
                                py: { xs: 1.5, sm: 2, md: 3 },
                                cursor: "pointer",
                                "&:hover::before": {
                                    opacity: 0.2,
                                    transform: "rotate(-45deg) translateY(100%)",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-45%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.7s ease",
                                    opacity: 0,
                                    zIndex: 1,
                                },
                                "&:hover .image": {
                                    transform: "scale(1.1) !important",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    padding: { xs: "0 12px", sm: "0 20px", md: "0 40px", lg: "0 60px" },
                                    width: "100%"
                                }}
                            >
                                <Typography
                                    className={'monserrat'}
                                    sx={{
                                        fontSize: { xs: "16px", sm: "20px", md: "28px", lg: "32px", xl: "36px" },
                                        color: "",
                                        paddingBottom: { xs: "6px", sm: "8px", md: "12px", lg: "16px", xl: "20px" },
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        letterSpacing: '1px',
                                        transition: '0.3s',
                                    }}
                                >
                                    Our Vision
                                </Typography>
                                <Typography
                                    className={'desc'}
                                    sx={{
                                        fontSize: { xs: "11px", sm: "13px", md: "16px", lg: "18px", xl: "20px" },
                                        color: "#525252",
                                        transition: '0.3s',
                                        textAlign: 'center',
                                        lineHeight: { xs: 1.2, sm: 1.3, md: 1.4, lg: 1.5 }
                                    }}
                                >
                                    Vision is to be the leading provider of innovative and sustainable solutions that enhance the quality of life for individuals and communities worldwide.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Second Box */}
                        <Box
                            sx={{
                                width: { xs: "100%", md: "60%" },
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 'auto',
                                minHeight: '100%',
                                py: { xs: 1.5, sm: 2, md: 3 },
                                cursor: "pointer",
                                "&:hover::before": {
                                    opacity: 0.2,
                                    transform: "rotate(-45deg) translateY(100%)",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-45%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.7s ease",
                                    opacity: 0,
                                    zIndex: 1,
                                },
                                "&:hover .image": {
                                    transform: "scale(1.1) !important",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                data-aos="fade-left"
                                src={Img3}
                                alt="PAPPADUM Brand"
                                className={'image'}
                                sx={{
                                    width: "auto",
                                    maxWidth: { xs: "65%", sm: "60%", md: "55%" },
                                    maxHeight: { xs: "50%", sm: "55%", md: "60%" },
                                    objectFit: "contain",
                                    filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                                    zIndex: 2,
                                    position: "relative",
                                    transition:"0.6s !important",
                                    transformOrigin: "center center",
                                    "&:hover": {
                                        transform: "scale(1.1) !important",
                                        backfaceVisibility: "hidden",
                                        willChange: "transform"
                                    }
                                }}
                            />
                        </Box>
                        {/* Third Box */}
                        <Box
                            sx={{
                                background: `${theme.palette.saffron}`,
                                width: { xs: "100%", md: "50%" },
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 'auto',
                                minHeight: '100%',
                                py: { xs: 1.5, sm: 2, md: 3 },
                                cursor: "pointer",
                                "&:hover::before": {
                                    opacity: 0.2,
                                    transform: "rotate(-45deg) translateY(100%)",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-45%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.7s ease",
                                    opacity: 0,
                                    zIndex: 1,
                                },
                                "&:hover .image": {
                                    transform: "scale(1.1) !important",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    padding: { xs: "0 12px", sm: "0 20px", md: "0 40px", lg: "0 60px" },
                                    width: "100%"
                                }}
                            >
                                <Typography
                                    className={'monserrat'}
                                    sx={{
                                        fontSize: { xs: "16px", sm: "20px", md: "28px", lg: "32px", xl: "36px" },
                                        color: "",
                                        paddingBottom: { xs: "6px", sm: "8px", md: "12px", lg: "16px", xl: "20px" },
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        letterSpacing: '1px',
                                        transition: '0.3s',
                                    }}
                                >
                                    Our Mission
                                </Typography>
                                <Typography
                                    className={'desc'}
                                    sx={{
                                        fontSize: { xs: "11px", sm: "13px", md: "16px", lg: "18px", xl: "20px" },
                                        color: "#525252",
                                        transition: '0.3s',
                                        textAlign: 'center',
                                        lineHeight: { xs: 1.2, sm: 1.3, md: 1.4, lg: 1.5 }
                                    }}
                                >
                                    Mission is to deliver exceptional products and services that empower individuals and organizations to achieve their goals while fostering a culture of innovation, integrity, and social responsibility
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            justifyContent: "center",
                            alignItems: "stretch",
                            minHeight: { xs: 180, sm: 240, md: 300, lg: 400 },
                            height: "auto",
                        }}
                    >
                        {/* First Box */}
                        <Box
                            sx={{
                                width: { xs: "100%", md: "50%" },
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 'auto',
                                minHeight: '100%',
                                py: { xs: 1.5, sm: 2, md: 3 },
                                cursor: "pointer",
                                "&:hover::before": {
                                    opacity: 0.2,
                                    transform: "rotate(-45deg) translateY(100%)",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-45%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.7s ease",
                                    opacity: 0,
                                    zIndex: 1,
                                },
                                "&:hover .image": {
                                    transform: "scale(1.1) !important",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                data-aos="fade-right"
                                src={Img1}
                                alt="WOW Brand"
                                className={'image'}
                                sx={{
                                    width: "auto",
                                    maxWidth: { xs: "65%", sm: "60%", md: "55%" },
                                    maxHeight: { xs: "50%", sm: "55%", md: "60%" },
                                    objectFit: "contain",
                                    filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                                    zIndex: 2,
                                    position: "relative",
                                    transformOrigin: "center center",
                                    transition:"0.6s !important",
                                }}
                            />
                        </Box>

                        {/* Second Box */}
                        <Box
                            sx={{
                                background: `${theme.palette.saffron}`,
                                width: { xs: "100%", md: "60%" },
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 'auto',
                                minHeight: '100%',
                                py: { xs: 1.5, sm: 2, md: 3 },
                                cursor: "pointer",
                                "&:hover::before": {
                                    opacity: 0.2,
                                    transform: "rotate(-45deg) translateY(100%)",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-45%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.7s ease",
                                    opacity: 0,
                                    zIndex: 1,
                                },
                                "&:hover .image": {
                                    transform: "scale(1.1) !important",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    padding: { xs: "0 12px", sm: "0 20px", md: "0 40px", lg: "0 60px" },
                                    width: "100%"
                                }}
                            >
                                <Typography
                                    className={'monserrat'}
                                    sx={{
                                        fontSize: { xs: "16px", sm: "20px", md: "28px", lg: "32px", xl: "36px" },
                                        color: "",
                                        paddingBottom: { xs: "6px", sm: "8px", md: "12px", lg: "16px", xl: "20px" },
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        letterSpacing: '1px',
                                        transition: '0.3s',
                                    }}
                                >
                                    About Us
                                </Typography>
                                <Typography
                                    className={'desc'}
                                    sx={{
                                        fontSize: { xs: "11px", sm: "13px", md: "16px", lg: "18px", xl: "20px" },
                                        color: "#525252",
                                        transition: '0.3s',
                                        textAlign: 'center',
                                        lineHeight: { xs: 1.2, sm: 1.3, md: 1.4, lg: 1.5 }
                                    }}
                                >
                                    At Jayant Snacks, we are committed to delivering high-quality, innovative, and sustainable products that enhance the lives of our customers. Our team is dedicated to excellence, and we strive to create a positive impact in the communities we serve.
                                </Typography>
                            </Box>
                        </Box>
                        {/* Third Box */}
                        <Box
                            sx={{
                                width: { xs: "100%", md: "50%" },
                                overflow: "hidden",
                                position: "relative",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: 'auto',
                                minHeight: '100%',
                                py: { xs: 1.5, sm: 2, md: 3 },
                                cursor: "pointer",
                                "&:hover::before": {
                                    opacity: 0.2,
                                    transform: "rotate(-45deg) translateY(100%)",
                                },
                                "&::before": {
                                    content: '""',
                                    position: "absolute",
                                    top: "-45%",
                                    left: "-50%",
                                    width: "200%",
                                    height: "200%",
                                    transform: "rotate(-45deg)",
                                    transition: "all 0.7s ease",
                                    opacity: 0,
                                    zIndex: 1,
                                },
                                "&:hover .image": {
                                    transform: "scale(1.1) !important",
                                    backfaceVisibility: "hidden",
                                    willChange: "transform"
                                }
                            }}
                        >
                            <Box
                                component="img"
                                data-aos="fade-left"
                                src={Img2}
                                alt="PAPPADUM Brand"
                                className={'image'}
                                sx={{
                                    width: "auto",
                                    maxWidth: { xs: "65%", sm: "60%", md: "55%" },
                                    maxHeight: { xs: "50%", sm: "55%", md: "60%" },
                                    objectFit: "contain",
                                    filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))",
                                    zIndex: 2,
                                    position: "relative",
                                    transition:"0.6s !important",
                                    transformOrigin: "center center",
                                    "&:hover": {
                                        transform: "scale(1.1) !important",
                                        backfaceVisibility: "hidden",
                                        willChange: "transform"
                                    }
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default OurCompany;
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
                        height: { xs: 300, sm: 350, md: 500 },
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
                            // background: 'linear-gradient(90deg, #caefd7, #f4f4f4, #abc9e9)',
                            // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
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
                                // background: "linear-gradient(0deg, transparent, transparent 30%, rgba(0,0,0,0.5))",
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
                        {/* Image */}
                        <Box

                        >
                            <Typography
                                className={'monserrat'}
                                sx={{
                                    fontSize: {xs: "30px", sm: "36px"},
                                    color: "",
                                    paddingBottom: "20px",
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
                                    fontSize: {xs: "18px", sm: "20px", md: "22px"},
                                    color: "#525252",
                                    transition: '0.3s',
                                    textAlign: 'center',
                                    padding: "0 60px",
                                }}
                            >
                                Vision is to be the leading provider of innovative and sustainable solutions that enhance the quality of life for individuals and communities worldwide.
                            </Typography>
                        </Box>
                    </Box>

                    {/* Second Box */}
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            overflow: "hidden",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // background: "linear-gradient(90deg, #d3f3f1, #e9b7ce)",
                            // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
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
                                // background: "linear-gradient(0deg, transparent, transparent 30%, rgba(0,0,0,0.5))",
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
                                maxWidth: { xs: "70%", sm: "60%" },
                                maxHeight: "60%",
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
                            // background: "linear-gradient(90deg, #d3f3f1, #e9b7ce)",
                            // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
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
                                // background: "linear-gradient(0deg, transparent, transparent 30%, rgba(0,0,0,0.5))",
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
                        >
                            <Typography
                                className={'monserrat'}
                                sx={{
                                    fontSize: {xs: "30px", sm: "36px"},
                                    color: "",
                                    paddingBottom: "20px",
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
                                    fontSize: {xs: "18px", sm: "20px", md: "22px"},
                                    color: "#525252",
                                    transition: '0.3s',
                                    textAlign: 'center',
                                    padding: "0 60px",
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
                        height: { xs: 300, sm: 350, md: 500 },
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
                            // background: 'linear-gradient(90deg, #caefd7, #f4f4f4, #abc9e9)',
                            // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
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
                                // background: "linear-gradient(0deg, transparent, transparent 30%, rgba(0,0,0,0.5))",
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
                        {/* Image */}
                        <Box
                            component="img"
                            data-aos="fade-right"
                            src={Img1}
                            alt="WOW Brand"
                            className={'image'}
                            sx={{
                                width: "auto",
                                maxWidth: { xs: "70%", sm: "60%" },
                                maxHeight: "60%",
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
                            width: { xs: "100%", md: "50%" },
                            overflow: "hidden",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            // background: "linear-gradient(90deg, #d3f3f1, #e9b7ce)",
                            // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
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
                                // background: "linear-gradient(0deg, transparent, transparent 30%, rgba(0,0,0,0.5))",
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
                        >
                            <Typography
                                className={'monserrat'}
                                sx={{
                                    fontSize: {xs: "30px", sm: "36px"},
                                    color: "",
                                    paddingBottom: "20px",
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
                                    fontSize: {xs: "18px", sm: "20px", md: "22px"},
                                    color: "#525252",
                                    transition: '0.3s',
                                    textAlign: 'center',
                                    padding: "0 60px",
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
                            // background: "linear-gradient(90deg, #d3f3f1, #e9b7ce)",
                            // boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
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
                                // background: "linear-gradient(0deg, transparent, transparent 30%, rgba(0,0,0,0.5))",
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
                                maxWidth: { xs: "70%", sm: "60%" },
                                maxHeight: "60%",
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
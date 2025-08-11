import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

import logo from '../../assets/images/global/jeepy-logo.png';
// Add your video file path here
import heroVideo from '../../assets/images/home/heroSection/My Video1.mp4';
import {rgba} from "framer-motion";

function HeroSection() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden"
            }}
        >
            {/* Background Video */}
            <Box
                component="video"
                autoPlay
                muted
                loop
                playsInline
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            >
                {/* Replace with your video source */}
                {/* <source src={heroVideo} type="video/mp4" /> */}
                <source src={heroVideo} type="video/mp4" />
            </Box>

            {/* Orange Glassmorphism Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(254, 195, 85, 0.2)',
                    backgroundBlendMode: 'overlay',
                    backdropFilter: 'blur(1px)',
                    WebkitBackdropFilter: 'blur(1px)',
                    zIndex: 1
                }}
            />

            {/* Logo at the top */}
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: 20, sm: 30, md: 40 },
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                }}
            >
                <Box sx={{
                    height: "100%",
                    width: { xs: "120px", sm: '150px', md: '180px' }
                }}>
                    <img
                        src={logo}
                        alt="Jeppy Logo"
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain"
                        }}
                    />
                </Box>
            </Box>

            {/* Main Text Content */}
            <Box sx={{
                position: "relative",
                zIndex: 10,
                textAlign: 'center',
                // background: 'rgba(255, 255, 255, 0.1)',
                // backdropFilter: 'blur(20px)',
                // WebkitBackdropFilter: 'blur(20px)',
                // borderRadius: '20px',
                // border: '1px solid rgba(255, 255, 255, 0.2)',
                // p: { xs: 3, sm: 4, md: 6 },
                // boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            }}>
                <Typography
                    className={'monserrat'}
                    sx={{
                        color: 'rgba(255,255,255,0.9)',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: { xs: '28px', sm: "34px", md: "48px" },
                        letterSpacing: "2px",
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        mb: 1,
                    }}
                >
                    World of
                </Typography>

                <Typography
                    className={'monserrat'}
                    sx={{
                        color: 'rgba(255,255,255,0.9)',
                        textAlign: 'center',
                        fontWeight: 900,
                        fontSize: { xs: '64px', sm: "96px", md: "140px" },
                        letterSpacing: "3px",
                        lineHeight: { xs: '64px', sm: '96px', md: '140px' },
                        // textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                        // background: 'linear-gradient(45deg, #fff 30%, #ffeb3b 70%)',
                        // backgroundClip: 'text',
                        // WebkitBackgroundClip: 'text',
                        // WebkitTextFillColor: 'transparent',
                        mb: 1,
                    }}
                >
                    Snack
                </Typography>

                <Typography
                    className={'monserrat'}
                    sx={{
                        color: 'rgba(255,255,255,0.9)',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: { xs: '28px', sm: "34px", md: "48px" },
                        letterSpacing: "2px",
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    Pellets
                </Typography>
            </Box>

            {/* Optional: Scroll indicator */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 30,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        mb: 1,
                        opacity: 0.8,
                    }}
                >
                    Scroll Down
                </Typography>
                <Box
                    sx={{
                        width: '2px',
                        height: '30px',
                        backgroundColor: 'white',
                        margin: '0 auto',
                        animation: 'bounce 2s infinite',
                        '@keyframes bounce': {
                            '0%, 20%, 50%, 80%, 100%': {
                                transform: 'translateY(0)',
                                opacity: 1,
                            },
                            '40%': {
                                transform: 'translateY(-10px)',
                                opacity: 0.7,
                            },
                            '60%': {
                                transform: 'translateY(-5px)',
                                opacity: 0.9,
                            },
                        },
                    }}
                />
            </Box>
        </Box>
    );
}

export default HeroSection;
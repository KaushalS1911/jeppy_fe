import React from 'react';
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css';

function AboutHeader() {
    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Box
            id="header"
            sx={{
                position: 'relative',
                minHeight: '100vh',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                zIndex: 1,
            }}
        >
            <iframe
                src="https://www.youtube.com/embed/pZsd9cHwzIg?autoplay=1&mute=1&loop=1&playlist=pZsd9cHwzIg&controls=0&showinfo=0&modestbranding=1&cc_load_policy=0"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(254, 195, 85, 0.4)',
                    zIndex: 1,
                }}
            />

            <Container sx={{position: 'relative', zIndex: 2}}>
                <Typography
                    data-aos="fade-down"
                    data-aos-delay="200"
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: '#161616',
                        fontSize: { md: "64px", sm: "48px", xs: "36px" },
                    }}
                >
                    Innovating the Future of Snacks
                </Typography>
                <Typography
                    data-aos="fade-up"
                    data-aos-delay="400"
                    variant="h6"
                    sx={{
                        mb: 5,
                        color: '#000',
                        fontSize: { md: "22px", sm: "20px", xs: "16px" },
                    }}
                >
                    Scalable. Customizable. Built to Deliver.
                </Typography>
                <Box
                    data-aos="zoom-in"
                    data-aos-delay="600"
                >
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: `${theme.palette.headerButton}`,
                            color: '#fff',
                            p: { sm: "22px 32px", xs: "15px 22px" },
                            fontWeight: 600,
                            fontSize: { md: "22px", sm: "20px", xs: "16px" },
                            textTransform: 'none',
                            borderRadius: '50px',
                            border: `2px solid transparent`,
                            transition: "0.3s !important",
                            '&:hover': {
                                backgroundColor: '#FFF',
                                color: `${theme.palette.headerButton}`,
                                border: `2px solid ${theme.palette.headerButton}`,
                            },
                        }}
                        onClick={() => navigate('/')}
                    >
                        Watch Our Story
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default AboutHeader;
import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, useTheme, Container } from '@mui/material';
import imgstep3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png";
import 'aos/dist/aos.css';

function Ourprocessstep3() {
    const theme = useTheme();
    const [isHovered, setIsHovered] = useState(false);

    const shineEffectStyles = {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
        boxShadow: '0 6px 30px rgba(0,0,0,0.15)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-75%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 100%)',
            transform: 'skewX(-25deg)',
            transition: 'all 0.75s',
            zIndex: 2,
        },
        '&:hover::before': {
            left: '125%',
        },
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
        },
    };

    const data = [
        {
            steps: "STEP 3",
            title: "Hygiene & Automation",
            points: [
                "Fully automated, touch-free production.",
                "High hygiene compliance and food safety.",
                "Scalable output: up to 75,000 MT/year.",
            ],
            image: imgstep3,
        }
    ];

    return (
        <Container
            maxWidth="xl"
            sx={{
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 6, sm: 8, md: 10 },
            }}
        >
            <Box
                sx={{
                    backgroundColor: theme.palette.saffron || 'rgba(242, 138, 30, 1)',
                    borderRadius: '20px',
                    px: { xs: 2, sm: 4, md: 6 },
                    py: { xs: 6, sm: 8, md: 10 },
                }}
            >
                {data.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', lg: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: { xs: 4, sm: 6, md: 10, lg: 12 },
                        }}
                    >
                        {/* Text Section */}
                        <Box
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            sx={{
                                flex: 1,
                                maxWidth: { xs: '100%', md: '600px', lg: '700px' },
                                px: { xs: 1, sm: 2, md: 3 },
                            }}
                        >
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                    color: '#FFF',
                                    fontWeight: 400,
                                    mb: 1,
                                }}
                            >
                                {item.steps}
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '28px', sm: '36px', md: '44px', xl: '50px' },
                                    color: '#FFF',
                                    lineHeight: 1.3,
                                    mb: 3,
                                }}
                            >
                                {item.title}
                            </Typography>

                            <List
                                dense
                                sx={{
                                    listStyleType: 'disc',
                                    pl: 3,
                                }}
                            >
                                {item.points.map((point, pointIndex) => (
                                    <ListItem
                                        key={pointIndex}
                                        sx={{
                                            display: 'list-item',
                                            color: '#FFF',
                                            py: 0.5,
                                        }}
                                    >
                                        <ListItemText
                                            primary={point}
                                            primaryTypographyProps={{
                                                sx: {
                                                    fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                                    fontWeight: 500,
                                                    lineHeight: 1.5,
                                                },
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>

                        {/* Image Section */}
                        <Box
                            data-aos="fade-left"
                            data-aos-duration="1200"
                            sx={{
                                flex: 1,
                                width: '100%',
                                maxWidth: { xs: '100%', sm: '550px', md: '700px', lg: '850px', xl: '1000px' },
                                ...shineEffectStyles,
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <img
                                src={item.image}
                                alt={`${item.title} illustration`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    display: 'block',
                                    transition: 'transform 0.6s ease',
                                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                }}
                            />
                        </Box>
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default Ourprocessstep3;

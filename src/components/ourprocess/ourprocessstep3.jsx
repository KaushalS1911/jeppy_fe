import React, {useState} from 'react';
import {Box, Typography, List, ListItem, ListItemText, useTheme,Container} from '@mui/material';
import imgstep3 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Hygiene&Automation.png";
import 'aos/dist/aos.css';

function Ourprocessstep3() {
    const theme = useTheme();

    const [isHovered, setIsHovered] = useState(false);

    const shineEffectStyles = {
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-75%',
            width: '50%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%)',
            transform: 'skewX(-25deg)',
            transition: 'all 0.75s',
            zIndex: 1,
        },
        '&:hover::before': {
            left: '125%',
        }
    };

    const data = [
        {
            steps: "STEP 3",
            title: "Hygiene & Automation",
            points: [
                "Fully automated, touch-free production",
                "High hygiene compliance",
                "Scalable output: up to 75,000 MT/year",
                // " Efficient mass production (up to 75,000 metric tons/year)",
            ],
            image: imgstep3,
        }
    ];

    return (
        <Container maxWidth="xxl" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
            <Box sx={{backgroundColor: `${theme.palette.saffron}`}}>
                <Box sx={{margin: {sm: '0 30px', lg: "0 auto", xs: "0 10px"}}}>
                    {data.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                py: 8,
                                flexDirection: {xs: 'column', lg: 'row'},
                                justifyContent: 'space-between',
                                alignItems: {lg: 'center', xs: "unset"},
                            }}
                        >
                            <Box
                                data-aos="fade-right"
                                data-aos-duration="1200"
                                sx={{
                                    pl: {xs: 2, sm: 4, md: 6, lg: 6},
                                    py: {xs: 1, sm: 2, md: 3, lg: 4},
                                }}
                            >
                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    variant="h5"
                                    sx={{
                                        fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                        lineHeight: '24px',
                                        color: "#FFF",
                                        fontWeight: 300,
                                        mr: 2,
                                    }}
                                >
                                    {item.steps}
                                </Typography>

                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    variant="h6"
                                    className={'monserrat'}
                                    sx={{
                                        my: 2,
                                        fontWeight: 700,
                                        fontSize: {xl: "44px", sm: "34px", xs: "30px"},
                                        color: item.steps === 'STEP 3' ? "#fff" : "#000",

                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <List
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    dense
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 4,
                                        fontWeight: 500,
                                        fontSize: {xl: "22px", sm: "18px", xs: "16px"},
                                    }}
                                >
                                    {item.points.map((point, pointIndex) => (
                                        <ListItem
                                            key={pointIndex}
                                            data-aos="fade-up"
                                            data-aos-delay={400 + (pointIndex * 100)}
                                            sx={{display: 'list-item', color: '#fff'}}
                                        >
                                            <ListItemText
                                                primary={point}
                                                primaryTypographyProps={{
                                                    sx: {
                                                        fontSize: {xl: "20px", sm: "18px", xs: "16px"},
                                                        fontWeight: 500,
                                                    },
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            <Box
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                sx={{
                                    height: {lg: "470px", xs: "100%"},
                                    alignItems: 'center',
                                    display: "flex",
                                    justifyContent:"center",
                                    ...shineEffectStyles
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img
                                    src={item.image}
                                    alt={`${item.title} illustration`}
                                    style={{
                                        width: '900px%',
                                        height: '587px',
                                        transition: "transform 0.5s ease",
                                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                                    }}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default Ourprocessstep3;
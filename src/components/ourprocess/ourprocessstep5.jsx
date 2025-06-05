import React, {useState} from 'react';
import {Box, Typography, List, ListItem, ListItemText, useTheme,Container} from '@mui/material';
import imgstep5 from "../../assets/images/ourprocess/ManufacturingProcessSteps/Packaging&Storage.png";
import 'aos/dist/aos.css';


function Ourprocessstep5() {
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
            steps: "STEP 5",
            title: "Packaging & Dispatch",
            intro: "Final products are:",
            points: [
                "Final inspection before packing",
                "Sealed in hygienic, market-ready formats",
                "Stored & shipped for domestic and global delivery",
            ],
            footer: "Ready for dispatch to domestic and international markets.",
            image: imgstep5,
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
                                    maxWidth: '600px',
                                }}
                            >
                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    variant="h5"
                                    sx={{
                                        fontSize: {xl: "24px", sm: "20px", xs: "16px"},
                                        lineHeight: '24px',
                                        fontWeight: 300,
                                        mb: 1,
                                        color: "#FFF"
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
                                        color: item.steps === 'STEP 5' ? "#fff" : "#000",
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    sx={{
                                        fontSize: {xl: "22px", sm: "18px", xs: "16px"},
                                        fontWeight: 500,
                                        mb: 1,
                                        color: "#FFF"
                                    }}
                                >
                                    {item.intro}
                                </Typography>

                                <List
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    dense
                                    sx={{
                                        listStyleType: 'disc',
                                        pl: 2,
                                        fontWeight: 500,
                                        fontSize: {xl: "22px", sm: "18px", xs: "16px"},
                                    }}
                                >
                                    {item.points.map((point, pointIndex) => (
                                        <ListItem
                                            key={pointIndex}
                                            data-aos="fade-up"
                                            data-aos-delay={500 + (pointIndex * 100)}
                                            sx={{display: 'list-item', color: "#FFF"}}
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

                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="800"
                                    sx={{
                                        mt: 2,
                                        fontSize: {xl: "20px", sm: "18px", xs: "16px"},
                                        fontWeight: 500,
                                        color: "#FFF"
                                    }}
                                >
                                    {item.footer}
                                </Typography>
                            </Box>

                            <Box
                                data-aos="fade-left"
                                data-aos-duration="1200"
                                sx={{
                                    width: {lg: '1000px', xs: "100%"},
                                    height: {lg: '550px', xs: "100%"}, ...shineEffectStyles
                                }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <img
                                    src={item.image}
                                    alt={`${item.title} illustration`}
                                    style={{
                                        width: '100%',
                                        height: '587px',
                                        objectFit: "cover",
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

export default Ourprocessstep5;
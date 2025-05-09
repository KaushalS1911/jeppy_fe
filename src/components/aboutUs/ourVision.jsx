import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import 'aos/dist/aos.css';

const visionData = [
    {
        title: "Our Vision",
        description: "To become a global benchmark in clean, smart, and scalable snack manufacturing — driven by quality, innovation, and sustainability.",
    },
    {
        title: "Our Mission",
        description: "To empower brands with snack solutions that are bold in taste, honest in ingredients, and tailored to the evolving needs of consumers across the world.",
    }
];

function OurVision() {

    return (
        <Container maxWidth={"xl"} sx={{padding: {xs: '2rem', sm: '4rem', md: '6rem'}}}>
            <Box
                sx={{paddingTop: '3rem'}}
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <Box
                    sx={{
                        display: {xs: 'column', md: 'flex',},
                        gap: {xs: '30px', sm: '40px', md: '50px'},
                        flexDirection: {xs: 'column', sm: 'row'},
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                    }}
                >
                    {visionData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: {xs: '1 1 100%', sm: '1 1 48%'},
                                borderRadius: "12px",
                                margin: "10px 0",
                                backgroundColor: "#fff",
                                padding: {xs: '20px', sm: '50px 40px'},
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                minHeight: '250px',
                                transition: '0.3s',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    background: 'linear-gradient(147deg,rgba(242, 138, 30, 1) 0%, rgba(194, 111, 25, 1) 100%)',
                                },
                                '&:hover .monserrat': {
                                    color: '#FFF',
                                },
                                '&:hover .desc': {
                                    color: '#FFF',
                                }
                            }}
                            data-aos={index === 0 ? "fade-right" : "fade-left"}
                            data-aos-delay={200 + (index * 150)}
                        >
                            <Typography
                                className={'monserrat'}
                                sx={{
                                    fontSize: {xs: "30px", sm: "36px"},
                                    color: "#0c2253",
                                    paddingBottom: "20px",
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    letterSpacing: '1px',
                                    transition: '0.3s',
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                className={'desc'}
                                sx={{
                                    fontSize: {xs: "19px", sm: "21px", md: "24px"},
                                    lineHeight: {xs: "25px", sm: "30px", md: "40px"},
                                    color: "#525252",
                                    // textAlign: 'justify',
                                    transition: '0.3s',
                                    letterSpacing:"1px"
                                }}
                            >
                                {item.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}

export default OurVision;
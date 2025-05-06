import React from 'react';
import { Box, Container, Typography } from "@mui/material";

// Vision and Purpose Data
const visionData = [
    {
        title: "Our Vision",
        description: "To become a global benchmark in clean, smart, and scalable snack manufacturing — driven by quality, innovation, and sustainability.",
    },
    {
        title: "Our Purpose",
        description: "To empower brands with snack solutions that are bold in taste, honest in ingredients, and tailored to the evolving needs of consumers across the world.",
    }
];

function OurVision() {
    return (
        <Container maxWidth={"xl"} sx={{ padding: { xs: '2rem', sm: '4rem', md: '6rem' } }}>
            <Box sx={{ paddingTop: '3rem' }}>
                <Box
                    sx={{
                        display: { xs: 'column', md : 'flex',  },
                        gap: { xs: '30px', sm: '40px', md: '50px' },
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'stretch',
                    }}
                >
                    {visionData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: { xs: '1 1 100%', sm: '1 1 48%' }, // full-width on small screens, 48% on sm+ screens
                                borderRadius: "12px",
                                margin: "10px 0",
                                backgroundColor: "#fff",
                                padding: { xs: '20px', sm: '50px 40px'},
                                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                minHeight: '250px', // Prevent collapsing when content is small
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "30px", sm: "36px" },
                                    color: "#0c2253",
                                    paddingBottom: "20px",
                                    fontWeight: 'bold',
                                    textAlign: 'center', // Center title on smaller screens for better alignment
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "19px", sm: "21px" ,md: "24px" },
                                    lineHeight: { xs: "25px", sm: "30px" ,md: "40px" },
                                    color: "#525252",
                                    textAlign: 'justify',
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

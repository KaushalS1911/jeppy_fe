import React from 'react';
import {Box, Typography, Container, Grid, useTheme} from "@mui/material";
import bgimg from '../../assets/images/home/Milestone/assortment-salt-crackers_114579-65525.jpg';
import CountUp from "react-countup";
import {useInView} from 'react-intersection-observer';

const milestones = [
    {value: "300", sufix: "+", label: "SHAPES"},
    {value: "200", sufix: "", label: "MT/DAY\nPRODUCTION"},
    {value: "150", sufix: "+", label: "R&D BATCHES\nPER YEAR"},
    {value: "1000", sufix: "s", label: "OF\nFORMULATIONS"}
];

function Milestone() {
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.3});
    const theme = useTheme();

    return (
        <Box ref={ref}>
            <Box
                sx={{
                    py: {xs: 4, sm: 5, md: 4},
                    px: {xs: 2, sm: 3, md: 4},
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${bgimg}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: '#fff',
                    backgroundAttachment: 'fixed',
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item size={{xs: 12, md: 4, lg: 3}}>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Box
                                    sx={{
                                        width: {xs: 180, md: 250, xl: 280},
                                        height: {xs: 180, md: 250, xl: 280},
                                        borderRadius: "50%",
                                        bgcolor: "rgba(255, 238, 220, 1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: {xs: 150, md: 200, xl: 230},
                                            height: {xs: 150, md: 200, xl: 230},
                                            borderRadius: "50%",
                                            bgcolor: `${theme.palette.saffron}`,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white"
                                        }}
                                    >
                                        <Typography variant="h2" sx={{
                                            fontSize: {xs: "60px", md: "90px"},
                                            fontWeight: 700,
                                            lineHeight: 1
                                        }}>
                                            30
                                        </Typography>
                                        <Typography variant="h6" sx={{
                                            fontSize: {xs: "20px", md: "24px"},
                                            fontWeight: 500,
                                            letterSpacing: "1px"
                                        }}>
                                            YEARS
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item size={{xs: 12, md: 8, lg: 9}}>
                            <Grid container spacing={3}>
                                {milestones.map((item, index) => (
                                    <Grid item size={{xs: 6, sm: 3}} key={index}>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center"
                                        }}>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    fontSize: {xs: "28px", sm: "36px", md: "48px"},
                                                    fontWeight: 700,
                                                }}
                                            >
                                                {inView && <CountUp end={+item.value} duration={2.5}/>}
                                                {!inView && 0}
                                                {item.sufix}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontSize: {xs: "14px", md: "16px"},
                                                    fontWeight: 500,
                                                    whiteSpace: 'pre-line'
                                                }}
                                            >
                                                {item.label}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Milestone;

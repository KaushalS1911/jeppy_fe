import React from 'react';
import { Box, Typography, Button, Container, Stack, Grid } from "@mui/material";
import Img1 from "../../assets/images/home/Milestone/f6132242b4a9d1dc06825a76f30df44905f68c64.png";

const milestones = [
    { value: "300+", label: "SHAPES" },
    { value: "200", label: "MT/DAY\nPRODUCTION" },
    { value: "150+", label: "R&D BATCHES\nPER YEAR" },
    { value: "1000s", label: "OF\nFORMULATIONS" }
];

function Milestone() {
    return (
        <Container maxWidth="xl">
            <Box
                sx={{
                    py: { xs: 4, sm: 5, md: 6 },
                    px: { xs: 2, sm: 3, md: 4 }
                }}
            >
                <Grid container spacing={4} alignItems="center">
                    {/* 30 YEARS Circle */}
                    <Grid item  size={{xs:12 , md:4  ,lg:3}}>
                        <Box
                            sx={{
                                width: '100%',
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 180, md: 250, xl: 280 },
                                    height: { xs: 180, md: 250, xl: 280 },
                                    borderRadius: "50%",
                                    bgcolor: "rgba(255, 226, 194, 0.6)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}
                            >
                                <Box
                                    sx={{
                                        width: { xs: 150, md: 200, xl: 230 },
                                        height: { xs: 150, md: 200, xl: 230 },
                                        borderRadius: "50%",
                                        bgcolor: "#F7941D",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white"
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontSize: { xs: "60px", md: "90px" },
                                            fontWeight: 700,
                                            lineHeight: 1
                                        }}
                                    >
                                        30
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontSize: { xs: "20px", md: "24px" },
                                            fontWeight: 500,
                                            letterSpacing: "1px"
                                        }}
                                    >
                                        YEARS
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Milestones Grid */}
                    <Grid item size={{xs:12 , md:8 , lg:9}}>
                        <Grid container spacing={3}>
                            {milestones.map((item, index) => (
                                <Grid item size={{xs:6 , sm:3}} key={index}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center"
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                fontSize: { xs: "28px", sm:"36px" ,md: "48px" },
                                                fontWeight: 700,
                                            }}
                                        >
                                            {item.value}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: { xs: "14px", md: "16px" },
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

                {/* Image and Button Section */}
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "end",
                        mt: { xs: 4, md: 6 },
                        px: { xs: 2, sm: 3, md: 4 },
                        maxWidth: "1000px",
                        mx: "auto"
                    }}
                >
                    <Box
                        component="img"
                        src={Img1}
                        alt="Wafers"
                        sx={{
                            width: { xs: 70, md: 90 },
                            height: "auto",
                            objectFit: "contain"
                        }}
                    />
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                        spacing={2}
                        sx={{ width: '100%'}}
                    >
                        <Box
                            sx={{
                                height: '2px',
                                bgcolor: "#000",
                                flexGrow: 1,
                                mx: { xs: 2, md: 0 },
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: "#000",
                                color: "#fff",
                                borderRadius: 28,
                                p: {sm:"22px 32px" , xs:"15px 22px"},
                                "&:hover": {
                                    bgcolor: "#333"
                                },
                                textTransform: "none",
                                fontSize: { xs: 14, md: 16 },
                                fontWeight: 600,
                                minWidth: "140px"
                            }}
                        >
                            Read More
                        </Button>
                    </Stack>
                </Box>
            </Box>
        </Container>
    );
}

export default Milestone;

import React from 'react';
import {Box, Container, Typography, useTheme} from "@mui/material";
import "aos/dist/aos.css";

function Snackingvision() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: "#FFFFFF",
                py: { xs: 6, sm: 8, md: 10 },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ px: { xs: 2, sm: 4, md: 0 } }}>
                    {/* Main Heading */}
                    <Typography
                        variant="h4"
                        className="monserrat"
                        data-aos="fade-up"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "22px", sm: "26px", md: "38px", lg: "46px" },
                            lineHeight: { xs: "36px", sm: "48px", md: "58px" },
                            letterSpacing: "-0.5px",
                            mb: 3,
                            color: "#000000",
                        }}
                    >
                        Quality isn't a step in our process.
                    </Typography>

                    {/* Supporting text */}
                    <Typography
                        variant="body1"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: "16px", sm: "18px", md: "20px" },
                            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
                            maxWidth: "900px",
                            mx: "auto",
                            color: "#000000",
                        }}
                    >
                        It's embedded in everything we do. From raw material selection to packaged delivery, our integrated system ensures every pellet meets your exact specifications to create snack solutions that are scalable, safe, and market-ready.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Snackingvision;

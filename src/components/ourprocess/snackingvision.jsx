import React from 'react';
import {Box, Container, Typography, useTheme} from "@mui/material";

function Snackingvision() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: `${theme.palette.saffron}`,
                py: { xs: 6, sm: 8, md: 10 },
                color: "white",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ px: { xs: 2, sm: 4, md: 0 } }}>

                    {/* Small tagline */}
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            lineHeight: { xs: "22px", sm: "26px", md: "28px" },
                            letterSpacing: "0.5px",
                            opacity: 0.9,
                            mb: 1,
                        }}
                    >
                        EVERYTHING YOU NEED
                    </Typography>

                    {/* Main Heading */}
                    <Typography
                        variant="h4"
                        className="monserrat"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: "26px", sm: "36px", md: "48px" },
                            lineHeight: { xs: "36px", sm: "48px", md: "58px" },
                            letterSpacing: "-0.5px",
                            mb: 2,
                        }}
                    >
                        We turn your snacking vision into reality
                    </Typography>

                    {/* Supporting text */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: 400,
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            lineHeight: { xs: "24px", sm: "28px", md: "30px" },
                            maxWidth: "850px",
                            mx: "auto",
                            opacity: 0.95,
                            mt: 2,
                        }}
                    >
                        Whether it’s standard shapes or custom blends, we combine smart sourcing, advanced manufacturing,
                        and efficient packaging to create snack solutions that are scalable, safe, and market-ready.
                    </Typography>

                </Box>
            </Container>
        </Box>
    );
}

export default Snackingvision;

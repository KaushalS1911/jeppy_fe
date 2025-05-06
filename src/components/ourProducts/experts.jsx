import React from 'react';
import { Box, Typography, Button, Container } from "@mui/material";

const Experts = () => {
    return (
        <Container maxWidth={"xl"} sx={{ py: { xs: 4, md: 5 } }}>
            <Box
                sx={{
                    backgroundColor: '#FFF8F1', // Light orange background
                    borderRadius: 2,
                    p: { xs: 3, md: 6 },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: 3, md: 4 },
                }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        color: '#F97316', // Orange text color
                        fontWeight: 700,
                        fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                        lineHeight: 1.2,
                    }}
                >
                    Ready to Take Your Snack<Box component="br" sx={{ display: { xs: 'none', md: 'block' } }} /> Line to the Next Level?
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#F97316', // Orange background
                        color: 'white',
                        borderRadius: 28, // Very rounded button
                        px: 4,
                        py: 1.5,
                        textTransform: 'none',
                        fontWeight: 500,
                        fontSize: '1rem',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            backgroundColor: '#EA580C', // Darker orange on hover
                        },
                    }}
                >
                    Talk to Our Product Experts
                </Button>
            </Box>
        </Container>
    );
};

export default Experts;
import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    CardMedia,
    Container,
    useTheme,
} from '@mui/material';

// Update these imports with your actual images
import certificate1 from '../../assets/images/global/certificates/aped.PNG';
import certificate2 from '../../assets/images/global/certificates/fssai-certi.PNG';
import certificate3 from '../../assets/images/global/certificates/halal.PNG';
import certificate4 from '../../assets/images/global/certificates/isoqar.PNG';

const products = [
    { id: 1, image: certificate1 },
    { id: 2, image: certificate2 },
    { id: 3, image: certificate3 },
    { id: 4, image: certificate4 },
];

function Certification() {
    const theme = useTheme();

    return (
        <Box sx={{ position: 'relative', backgroundColor: '#4F3C69', py: '20px', overflow: 'hidden' ,marginTop:'50px'}}>
            {/* Black Transparent Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)', // You can adjust the opacity here
                    zIndex: 1,
                }}
            />

            {/* Content Layer */}
            <Container
                maxWidth="xl"
                sx={{ marginTop: '50px', position: 'relative', zIndex: 2 }}
            >
                <Box>
                    <Typography
                        variant="h5"
                        fontWeight={700}
                        textAlign="center"
                        mb={{ xs: 3, md: 4 }}
                        sx={{
                            fontSize: { xs: '20px', sm: '28px', md: '36px' },
                            fontWeight: 700,
                            color: '#FFFFFF',
                        }}
                    >
                        Certificates
                    </Typography>

                    <Grid container spacing={{ xs: 4, sm: 2, md: 4 }} justifyContent="center">
                        {products.map((product) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                key={product.id}
                                sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        maxWidth: '280px',
                                        height: '320px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        textAlign: 'center',
                                        p: { xs: 1.5, md: 2 },
                                        transition: 'transform 0.5s ease',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                        },
                                    }}
                                >
                                    <Box sx={{ flexGrow: 1 }}>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
                                            alt={product.name}
                                            sx={{
                                                height: { xs: '180px', sm: '200px', md: '220px' },
                                                objectFit: 'contain',
                                                mb: 2,
                                            }}
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            fontWeight={600}
                                            sx={{
                                                fontSize: { xs: '16px', md: '18px' },
                                                fontWeight: 700,
                                                color: "#141414",
                                                mb: 2
                                            }}
                                        >
                                            {product.name}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Certification;

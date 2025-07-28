import React from 'react';
import {
    Box,
    Typography,
    Grid,
    CardMedia,
    Container,
    useTheme,
} from '@mui/material';

// Update these imports with your actual images
import Img1 from '../../assets/images/products/2d.PNG';
import Img2 from '../../assets/images/products/3d.PNG';
import Img3 from '../../assets/images/products/micropellets.PNG';
import Img4 from '../../assets/images/products/sheeted-and-papd.PNG';

const products = [
    { id: 1, name: 'Cereal snack pellets', image: Img1 },
    { id: 2, name: 'Potato snack pellets', image: Img2 },
    { id: 3, name: 'Millet snack pellets', image: Img3 },
    { id: 4, name: 'Lentil snack pellets', image: Img4 },
    { id: 5, name: 'Low sodium snack pellets', image: Img4 },
];

function Products() {
    const theme = useTheme();

    // Split products into two rows
    const topRowProducts = products.slice(0, 3);  // First 3 products
    const bottomRowProducts = products.slice(3);  // Remaining 2 products

    return (
        <Container maxWidth="xl">
            <Box sx={{ pb: { xs: 5, md: 10 }, pt: { xs: 0, md: 10 } }}>
                <Typography
                    variant="h5"
                    fontWeight={700}
                    textAlign="center"
                    mb={{ xs: 3, md: 4 }}
                    sx={{
                        fontSize: { xs: '20px', sm: '28px', md: '36px' },
                        fontWeight: 700,
                    }}
                >
                    Products
                </Typography>

                {/* Top row - 3 products */}
                <Box sx={{ mb: 4 }}>
                    <Grid container justifyContent="center" spacing={{ xs: 2, sm: 3, md: 4 }}>
                        {topRowProducts.map((product) => (
                            <Grid
                                item
                                xs={12}
                                sm={4}
                                md={4}
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
                                                height: { xs: '180px', sm: '200px', md: '235px' },
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

                {/* Bottom row - 2 products */}
                <Box>
                    <Grid container justifyContent="center" spacing={{ xs: 2, sm: 3, md: 4 }}>
                        {bottomRowProducts.map((product) => (
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={product.id}
                                sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'center',
                                    maxWidth: { sm: '50%', md: '33.33%' }
                                }}
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
                                                height: { xs: '180px', sm: '200px', md: '235px' },
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
            </Box>
        </Container>
    );
}

export default Products;
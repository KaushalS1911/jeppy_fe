import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Container, useTheme,
} from '@mui/material';

import Img1 from '../../assets/images/home/Product/Gluten-Free-Group-Pics.png';
import Img2 from '../../assets/images/home/Product/3D-Group-Pic.png';
import Img3 from '../../assets/images/home/Product/Group-2D-Pic.png';
import Img4 from '../../assets/images/home/Product/Micro-Pellets-Group-Pics.png';
import Img6 from '../../assets/images/home/Product/Protein-Group.png';
import Img7 from '../../assets/images/home/Product/Sheeted-Group-Pic.png';
import Img8 from '../../assets/images/home/Product/Veggi-Group-Pic.png';

const categories = ['All', 'Cereal Based', 'Vegetable', 'High-Protein', 'Gluten Free'];

const products = [
    {id: 1, name: '2D Papad Snacks', category: 'All', image: Img3},
    {id: 2, name: '2D Papad Snacks', category: 'Cereal Based', image: Img2},
    {id: 3, name: '2D Papad Snacks', category: 'Vegetable', image: Img8},
    {id: 4, name: '2D Papad Snacks', category: 'High-Protein', image: Img6},
    {id: 6, name: '2D Papad Snacks', category: 'Cereal Based', image: Img7},
    {id: 7, name: '2D Papad Snacks', category: 'Gluten Free', image: Img1},
    {id: 8, name: '2D Papad Snacks', category: 'Vegetable', image: Img4},
];

function Products() {
    const [activeCategory, setActiveCategory] = useState('All');
    const theme = useTheme();

    const filteredProducts =
        activeCategory === 'All'
            ? products
            : products.filter((p) => p.category === activeCategory);

    return (
        <Container maxWidth="xl">
            <Box sx={{py: {xs: 4, md: 5}}}>
                <Typography
                    variant="h5"
                    fontWeight={600}
                    textAlign="center"
                    mb={{xs: 3, md: 4}}
                    sx={{
                        fontSize: {xs: '20px', sm: '28px', md: '36px'},
                        fontWeight: 700,
                    }}
                >
                    Our Products
                </Typography>

                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={{xs: 1, sm: 2, md: 3}}
                    mb={{xs: 4, md: 5}}
                    sx={{
                        overflowX: {xs: 'auto', md: 'visible'},
                        pb: {xs: 1, md: 0}
                    }}
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            sx={{
                                color: activeCategory === category ? `${theme.palette.saffron}` : '#111111',
                                textTransform: 'none',
                                fontWeight: 500,
                                borderBottom: activeCategory === category ? '2px solid #F97316' : 'none',
                                borderRadius: 0,
                                px: {xs: 1.5, md: 2},
                                whiteSpace: 'nowrap',
                                minWidth: 'auto',
                                fontSize: {xs: '18px', md: '22px'},
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>

                <Grid
                    container
                    spacing={{xs: 4, sm: 2, md: 4}}
                >
                    {filteredProducts.map((product) => (
                        <Grid
                            item
                            size={{lg: 3, md: 4, sm: 6, xs: 12}}
                            key={product.id}
                            sx={{display: 'flex', mx: {xs: 2, sm: "unset"}}}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '390px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    textAlign: 'center',
                                    // backgroundColor: 'rgba(240, 240, 240, 1)',
                                    p: {xs: 1.5, md: 2},
                                    // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',
                                    transition: 'transform 0.5s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                    },
                                    borderRadius: '8px',
                                }}
                            >
                                <Box sx={{flexGrow: 0}}>
                                    <CardMedia
                                        component="img"
                                        image={product.image}
                                        alt={product.name}
                                        sx={{
                                            height: {xs: '250px', sm: '200px', md: '200px'},
                                            objectFit: 'contain',
                                            mb: 2,
                                            pt: 1,
                                        }}
                                    />
                                </Box>
                                <Box sx={{p: 0, display: 'flex', justifyContent: 'center'}}>
                                    <Typography
                                        fontWeight={600}
                                        sx={{
                                            fontSize: {xs: '16px', md: '18px'},
                                            fontWeight: 700,
                                            color:"#141414"
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
                                </Box>
                                <Box sx={{pt: 1, pb: 1, display: 'flex', justifyContent: 'center'}}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: `${theme.palette.saffron}`,
                                            textTransform: 'none',
                                            transition: '0.5s',
                                            border: `2px solid ${theme.palette.saffron}`,
                                            '&:hover': {
                                                border: `2px solid ${theme.palette.saffron}`,
                                                backgroundColor: 'transparent',
                                                color: "#000",
                                                boxShadow: 'none',
                                            },
                                            boxShadow: "none",
                                            px: {xs: 2, md: 4},
                                            fontSize: {xs: '14px', md: '16px'},
                                            fontWeight: 600,
                                        }}
                                    >
                                        View
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default Products;
import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    InputBase,
    Grid,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/products/2d.PNG';
import img2 from '../../assets/images/products/3d.PNG';
import img3 from '../../assets/images/products/micropellets.PNG';
import img4 from '../../assets/images/products/sheeted-and-papd.PNG';



const categories = [
    '2D Pellets',
    '3D Pellets',
    'Micro Pellets',
    'Sheeted Pellets',
];

const productData = [
    {id: 1, name: 'ABCD', image: img1, category: '2D Pellets'},
    {id: 2, name: 'BACON CHIPS', image: img2, category: '3D Pellets'},
    {id: 3, name: 'BASKET 9', image: img3, category: 'Micro Pellets'},
    {id: 4, name: 'GARLIC RING 9MM', image: img4, category: 'Sheeted Pellets'},
];


const Products = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = productData.filter(
        (product) =>
            (activeCategory === '' || product.category === activeCategory) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log("::::::::::::::::::::::filteredProducts",filteredProducts);
    return (
        <Container maxWidth={"xl"}>
            <Box sx={{py: {xs: 4, md: 5}}}>
                <Typography
                    className={'monserrat'}
                    variant="h5"
                    fontWeight={600}
                    textAlign="center"
                    mb={{xs: 3, md: 4}}
                    sx={{fontSize: {xs: '1.5rem', md: '1.8rem'}}}
                >
                    Products
                </Typography>
                <Box
                    display="flex"
                    justifyContent="center"
                    flexWrap="wrap"
                    gap={{xs: 1, sm: 2, md: 3}}
                    mb={{xs: 4, md: 5}}
                    sx={{
                        overflowX: {xs: 'auto', md: 'visible'},
                        pb: {xs: 1, md: 0},
                        px: {md: 1, lg: 40},
                    }}
                >
                    {categories.map((category) => (
                        <Button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            sx={{
                                color: activeCategory === category ? '#F97316' : 'black',
                                textTransform: 'none',
                                fontWeight: activeCategory === category ? 600 : 500,
                                borderBottom: activeCategory === category ? '2px solid #F97316' : 'none',
                                borderRadius: 0,
                                px: {xs: 1.5, md: 2},
                                whiteSpace: 'nowrap',
                                minWidth: 'auto',
                                fontSize: '16px'
                            }}
                        >
                            {category}
                        </Button>
                    ))}
                </Box>
                <Box display="flex" justifyContent="center" mb={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 300,
                            border: '1px solid #ccc',
                            borderRadius: '50px',
                            px: 2,
                            py: 1,
                            backgroundColor: '#fff',
                        }}
                    >
                        <SearchIcon sx={{color: 'gray', mr: 1}}/>
                        <InputBase
                            placeholder="Search Product"
                            fullWidth
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{
                                color: 'gray',
                                '& input': {
                                    padding: 0,
                                },
                            }}
                        />
                    </Box>
                </Box>
                <Grid container spacing={3} padding={2} display="flex" justifyContent="center">
                    {filteredProducts.map((item, index) => (
                        <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    height: 250, // fixed card height
                                    width: {lg: 250, md: 218, sm: 210, xs: 142},
                                    mx: 'auto',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: 160,
                                        width: '100%',
                                        paddingTop: 1,
                                        px: 1,
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.image}
                                        alt={item.name}
                                        sx={{
                                            maxHeight: '100%',
                                            maxWidth: '100%',
                                            objectFit: 'contain',
                                        }}
                                    />
                                </Box>

                                <Box sx={{paddingBottom: '16px !important'}}>
                                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom noWrap>
                                        {item.name}
                                    </Typography>
                                    <Link to={`/product/${item.id}`} style={{textDecoration: 'none'}}>
                                        <Button
                                            variant="text"
                                            size="small"
                                            sx={{
                                                color: '#1ea4ce',
                                                borderTop: '2px solid #F97316',
                                                paddingBottom: 0,
                                                textTransform: 'none',
                                                borderRadius: 0
                                            }}
                                        >
                                            More Details
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Products;

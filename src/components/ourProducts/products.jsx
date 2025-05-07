import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    Typography,
    InputBase,
    Grid,
    Paper,
    Card,
    CardContent,
    CardActionArea,
    CardMedia,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

import img1 from '../../assets/images/products/ABCD-min-600x600 1.png';
import img2 from '../../assets/images/products/Animal-Big-min-600x600 1.png';
import img3 from '../../assets/images/products/Animals-Small-min-600x600 1.png';
import img4 from '../../assets/images/products/Bacon-Chips-400x400 1.png';
import img5 from '../../assets/images/products/Button-12mm-400x400 1.png';
import img6 from '../../assets/images/products/Button-12mm-400x400 2.png';
import img7 from '../../assets/images/products/Button-14mm-400x400 1.png';
// import img8 from '../../assets/images/products/Crab-400x400 1.png';
// import img9 from '../../assets/images/products/Engine-Rider-400x400 1.png';
import img10 from '../../assets/images/products/Flower-Button-400x400 1.png';
import img11 from '../../assets/images/products/Garlic-400x400 1.png';
import img12 from '../../assets/images/products/Garlic-Ring-9mm-400x400 1.png';
import img13 from '../../assets/images/products/Garlic-Ring-14mm-600x600 1.png';
import img14 from '../../assets/images/products/Gear-Ring-600x600 1.png';
import img15 from '../../assets/images/products/Jems-Giant-600x600 1.png';
import img16 from '../../assets/images/products/Lentil-Curl-600x600 1.png';
import img17 from '../../assets/images/products/Mad-Stick-600x600 1.png';
import img18 from '../../assets/images/products/Mesh-9-600x600 1.png';
import img19 from '../../assets/images/products/Mini-Ring-9mm-600x600 1.png';
import img20 from '../../assets/images/products/Penne-4mm-600x600 1.png';


const categories = [
    'All',
    '2D Pellets',
    '3D Pellets',
    'Micro Pellets',
    // 'Potato Pallets',
    'Protein Pellets',
    'Sheeted Pellets',
    'Veggi Pellets',
    'Glutten Free Pellets',
];

const productData = [
    {id: 1, name: 'ABCD', image: img1, category: '2D Pellets'},
    {id: 2, name: 'ANIMAL BIG', image: img2, category: '2D Pellets'},
    {id: 3, name: 'ANIMAL SMALL', image: img3, category: '2D Pellets'},
    {id: 4, name: 'BACON CHIPS', image: img4, category: '3D Pellets'},
    {id: 5, name: 'PENNE - 4MM', image: img5, category: '3D Pellets'},
    {id: 6, name: 'BASKET 9', image: img6, category: 'Micro Pellets'},
    {id: 7, name: 'BUTTON 12MM', image: img7, category: 'Micro Pellets'},
    // {id: 8, name: 'BUTTON 14MM', image: img8, category: 'Potato Pallets'},
    // {id: 9, name: 'CRAB', image: img9, category: 'Potato Pallets'},
    {id: 10, name: 'ENGINE RIDER', image: img10, category: 'Protein Pellets'},
    {id: 11, name: 'FLOWER BUTTON', image: img11, category: 'Protein Pellets'},
    {id: 12, name: 'GARLIC RING 9MM', image: img12, category: 'Sheeted Pellets'},
    {id: 13, name: 'GARLIC RING 14MM', image: img13, category: 'Sheeted Pellets'},
    {id: 14, name: 'GARLIC', image: img14, category: 'Veggi Pellets'},
    {id: 15, name: 'MINI RING 9MM', image: img15, category: 'Veggi Pellets'},
    {id: 16, name: 'GEAR RING', image: img16, category: 'Glutten Free Pellets'},
    {id: 17, name: 'MESH 9', image: img17, category: 'Glutten Free Pellets'},
    {id: 18, name: 'LENTIL CURL', image: img18, category: '2D Pellets'},
    {id: 19, name: 'JEMS GIANT', image: img19, category: '3D Pellets'},
    {id: 20, name: 'MAD STICK', image: img20, category: 'Micro Pellets'},
];


const Products = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = productData.filter(
        (product) =>
            (activeCategory === 'All' || product.category === activeCategory) &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    Our Products
                </Typography>

                {/* Category Buttons */}
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

                {/* Search Bar */}
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

                {/* Product Grid */}
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

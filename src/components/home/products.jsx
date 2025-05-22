// import React, { useState } from 'react';
// import {
//     Box,
//     Typography,
//     Button,
//     Grid,
//     CardMedia,
//     Container, useTheme,
// } from '@mui/material';
//
// import Img1 from '../../assets/images/home/Product/Gluten-Free-Group-Pics.png';
// import Img2 from '../../assets/images/home/Product/3D-Group-Pic.png';
// import Img3 from '../../assets/images/home/Product/Group-2D-Pic.png';
// import Img4 from '../../assets/images/home/Product/Micro-Pellets-Group-Pics.png';
// import Img6 from '../../assets/images/home/Product/Protein-Group.png';
// import Img7 from '../../assets/images/home/Product/Sheeted-Group-Pic.png';
// import Img8 from '../../assets/images/home/Product/Veggi-Group-Pic.png';
//
// const categories = ['All', 'Cereal Based', 'Vegetable', 'High-Protein', 'Gluten Free'];
//
// const products = [
//     {id: 1, name: '2D Papad Snacks', category: 'All', image: Img3},
//     {id: 2, name: '2D Papad Snacks', category: 'Cereal Based', image: Img2},
//     {id: 3, name: '2D Papad Snacks', category: 'Vegetable', image: Img8},
//     {id: 4, name: '2D Papad Snacks', category: 'High-Protein', image: Img6},
//     {id: 6, name: '2D Papad Snacks', category: 'Cereal Based', image: Img7},
//     {id: 7, name: '2D Papad Snacks', category: 'Gluten Free', image: Img1},
//     {id: 8, name: '2D Papad Snacks', category: 'Vegetable', image: Img4},
// ];
//
// function Products() {
//     const [activeCategory, setActiveCategory] = useState('All');
//     const theme = useTheme();
//
//     const filteredProducts =
//         activeCategory === 'All'
//             ? products
//             : products.filter((p) => p.category === activeCategory);
//
//     return (
//         <Container maxWidth="xl">
//             <Box sx={{py: {xs: 5, md: 10}}}>
//                 <Typography
//                     variant="h5"
//                     fontWeight={600}
//                     textAlign="center"
//                     mb={{xs: 3, md: 4}}
//                     sx={{
//                         fontSize: {xs: '20px', sm: '28px', md: '36px'},
//                         fontWeight: 700,
//                     }}
//                 >
//                     Our Products
//                 </Typography>
//
//                 <Box
//                     display="flex"
//                     justifyContent="center"
//                     flexWrap="wrap"
//                     gap={{xs: 1, sm: 2, md: 3}}
//                     mb={{xs: 4, md: 5}}
//                     sx={{
//                         overflowX: {xs: 'auto', md: 'visible'},
//                         pb: {xs: 1, md: 0}
//                     }}
//                 >
//                     {categories.map((category) => (
//                         <Button
//                             key={category}
//                             onClick={() => setActiveCategory(category)}
//                             sx={{
//                                 color: activeCategory === category ? `${theme.palette.saffron}` : '#111111',
//                                 textTransform: 'none',
//                                 fontWeight: 500,
//                                 borderBottom: activeCategory === category ? '2px solid #F97316' : 'none',
//                                 borderRadius: 0,
//                                 px: {xs: 1.5, md: 2},
//                                 whiteSpace: 'nowrap',
//                                 minWidth: 'auto',
//                                 fontSize: {xs: '18px', md: '22px'},
//                             }}
//                         >
//                             {category}
//                         </Button>
//                     ))}
//                 </Box>
//
//                 <Grid
//                     container
//                     spacing={{xs: 4, sm: 2, md: 4}}
//                 >
//                     {filteredProducts.map((product) => (
//                         <Grid
//                             item
//                             size={{lg: 3, md: 4, sm: 6, xs: 12}}
//                             key={product.id}
//                             sx={{display: 'flex', mx: {xs: 2, sm: "unset"}}}
//                         >
//                             <Box
//                                 sx={{
//                                     width: '100%',
//                                     height: '390px',
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'space-between',
//                                     textAlign: 'center',
//                                     p: {xs: 1.5, md: 2},
//                                     transition: 'transform 0.5s ease, box-shadow 0.3s ease',
//                                     '&:hover': {
//                                         transform: 'translateY(-10px)',
//                                     },
//                                     borderRadius: '8px',
//                                 }}
//                             >
//                                 <Box sx={{flexGrow: 0}}>
//                                     <CardMedia
//                                         component="img"
//                                         image={product.image}
//                                         alt={product.name}
//                                         sx={{
//                                             height: {xs: '250px', sm: '200px', md: '200px'},
//                                             objectFit: 'contain',
//                                             mb: 2,
//                                             pt: 1,
//                                         }}
//                                     />
//                                 </Box>
//                                 <Box sx={{p: 0, display: 'flex', justifyContent: 'center'}}>
//                                     <Typography
//                                         fontWeight={600}
//                                         sx={{
//                                             fontSize: {xs: '16px', md: '18px'},
//                                             fontWeight: 700,
//                                             color:"#141414"
//                                         }}
//                                     >
//                                         {product.name}
//                                     </Typography>
//                                 </Box>
//                                 <Box sx={{pt: 1, pb: 1, display: 'flex', justifyContent: 'center'}}>
//                                     <Button
//                                         variant="contained"
//                                         sx={{
//                                             bgcolor: `${theme.palette.saffron}`,
//                                             textTransform: 'none',
//                                             transition: '0.5s',
//                                             border: `2px solid ${theme.palette.saffron}`,
//                                             '&:hover': {
//                                                 border: `2px solid ${theme.palette.saffron}`,
//                                                 backgroundColor: 'transparent',
//                                                 color: `${theme.palette.saffron}`,
//                                                 boxShadow: 'none',
//                                             },
//                                             boxShadow: "none",
//                                             px: {xs: 2, md: 4},
//                                             fontSize: {xs: '14px', md: '16px'},
//                                             fontWeight: 600,
//                                         }}
//                                     >
//                                         View
//                                     </Button>
//                                 </Box>
//                             </Box>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Box>
//         </Container>
//     );
// }
//
// export default Products;

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
import Img1 from '../../assets/images/home/Product/Gluten-Free-Group-Pics.png';
import Img2 from '../../assets/images/home/Product/3D-Group-Pic.png';
import Img3 from '../../assets/images/home/Product/Group-2D-Pic.png';
import Img4 from '../../assets/images/home/Product/Micro-Pellets-Group-Pics.png';

const products = [
    { id: 2, name: 'Veggie Snacks', image: Img1 },
    { id: 3, name: 'High Protein', image: Img2 },
    { id: 4, name: 'Cereal Based', image: Img3 },
    { id: 5, name: 'Gluten Free', image: Img4 },
];

function Products() {
    const theme = useTheme();

    return (
        <Container maxWidth="xl">
            <Box sx={{ pb: { xs: 5, md: 12 } }}>
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
                                            fontSize: { xs: '18px', md: '20px' },
                                            fontWeight: 700,
                                            color: "#141414",
                                            mb: 2
                                        }}
                                    >
                                        {product.name}
                                    </Typography>
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
                                                color: `${theme.palette.saffron}`,
                                                boxShadow: 'none',
                                            },
                                            boxShadow: "none",
                                            px: { xs: 2, md: 4 },
                                            fontSize: { xs: '14px', md: '16px' },
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

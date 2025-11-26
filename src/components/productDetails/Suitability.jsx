import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/productsData';
import vegetarianIconV from '../../assets/images/products/veg.jpg';
import halalIcon from '../../assets/images/products/halal.jpg';
import kosherIcon from '../../assets/images/products/kosher.png';
import veganIcon from '../../assets/images/products/vegan.png';
import celiacIcon from '../../assets/images/products/celiac.jpg';
import glutenFreeIcon from '../../assets/images/products/celiac.jpg';

const suitabilityIcons = {
    'Vegan': veganIcon,
    'Vegetarian': vegetarianIconV,
    'Halal': halalIcon,
    'Kosher': kosherIcon,
    'Gluten Free': glutenFreeIcon,
    'Protein Rich': celiacIcon,
};

const Suitability = () => {
    const { id } = useParams();
    const product = getProductById(id);

    if (!product || !product.suitability || product.suitability.length === 0) {
        return null;
    }

    return (
        <Box sx={{ backgroundColor: "#C37A3D", py: 4 }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: { xs: 3, md: 5 },
                        p: { xs: 3, sm: 4, md: 5 },
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        maxWidth: "1400px",
                        margin: "0 auto",
                    }}
                >
                    <Box textAlign="center" mb={4}>
                        <Typography sx={{ color: '#000', fontSize: '20px', fontWeight: 600 }}>
                            This product is suitable for:
                        </Typography>
                    </Box>
                    <Grid container spacing={3} justifyContent="center">
                        {product.suitability.map((label, index) => {
                            const icon = suitabilityIcons[label] || celiacIcon;
                            return (
                                <Grid item xs={6} sm={4} md={2.4} key={index} textAlign="center">
                                    <Box
                                        component="img"
                                        src={icon}
                                        alt={label}
                                        sx={{ 
                                            width: 140, 
                                            height: 100, 
                                            mb: 1.5, 
                                            objectFit: "contain" 
                                        }}
                                    />
                                    <Typography display="block" sx={{ fontSize: { xs: '15px', sm: '16px', md: '17px' }, color: '#000', fontWeight: 500 }}>
                                        {label}
                                    </Typography>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Suitability;

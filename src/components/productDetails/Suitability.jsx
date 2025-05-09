import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import vegetarianIconV from '../../assets/images/products/istockphoto-1297289529-612x612.jpg';
import vegetarianIcon from '../../assets/images/products/vegetarianIcon1.jpg'
import halalIconV from '../../assets/images/products/Halal-logo.jpg';
import halalIcon from '../../assets/images/products/depositphotos_295841362-stock-illustration-halal-symbol-logo-icon-vector.jpg';
import kosherIconV from '../../assets/images/products/kosher.png';
import kosherIcon from '../../assets/images/products/images (1).png';
import veganIconV from '../../assets/images/products/yy3w44ku51zb1.png';
import veganIcon from '../../assets/images/products/images (2).png';
import celiacIconV from '../../assets/images/products/gluten-free-grain-icon-free-vector.jpg';
import celiacIcon from '../../assets/images/products/celiacIcon1.png';

const suitabilityData = [
    { label: 'Vegetarian', icon: vegetarianIconV },
    { label: 'Halal', icon: halalIcon },
    { label: 'Kosher\n(Certified)', icon: kosherIconV },
    { label: 'Vegan', icon: veganIcon },
    { label: 'Celiac', icon: celiacIconV },
];

const Suitability = () => {
    return (
        <Container sx={{ py: 4 }}>
            <Box textAlign="center" mb={3}>
                <Typography sx={{ color: 'gray', fontSize:'20px' }}>
                    This product is suitable for
                </Typography>
            </Box>
            <Grid container spacing={3} justifyContent="center">
                {suitabilityData.map(({ label, icon }, index) => (
                    <Grid item xs={6} sm={2} key={index} textAlign="center">
                        <Box
                            component="img"
                            src={icon}
                            alt={label}
                            sx={{ width: 100, height: 100, mb: 1 , objectFit:"contain" }}
                        />
                        <Typography display="block" sx={{fontSize:'16px',color: 'gray'}}>
                            {label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Suitability;

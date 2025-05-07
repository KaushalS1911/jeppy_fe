import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import vegetarianIcon from '../../assets/images/products/istockphoto-1297289529-612x612.jpg';
import halalIcon from '../../assets/images/products/Halal-logo.jpg';
import kosherIcon from '../../assets/images/products/kosher.png';
import veganIcon from '../../assets/images/products/yy3w44ku51zb1.png';
import celiacIcon from '../../assets/images/products/gluten-free-grain-icon-free-vector.jpg';

const suitabilityData = [
    { label: 'Vegetarian', icon: vegetarianIcon },
    { label: 'Halal', icon: halalIcon },
    { label: 'Kosher\n(Certified)', icon: kosherIcon },
    { label: 'Vegan', icon: veganIcon },
    { label: 'Celiac', icon: celiacIcon },
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
                    <Grid item xs={4} sm={2} key={index} textAlign="center">
                        <Box
                            component="img"
                            src={icon}
                            alt={label}
                            sx={{ width: 55, height: 55, mb: 1 }}
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

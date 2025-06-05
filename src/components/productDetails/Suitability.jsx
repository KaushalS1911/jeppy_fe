import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import vegetarianIconV from '../../assets/images/products/veg.jpg';
import halalIcon from '../../assets/images/products/halal.jpg';
import kosherIcon from '../../assets/images/products/kosher.png';
import veganIcon from '../../assets/images/products/vegan.png';
import celiacIcon from '../../assets/images/products/celiac.jpg';

const suitabilityData = [
    { label: 'Vegetarian', icon: vegetarianIconV },
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

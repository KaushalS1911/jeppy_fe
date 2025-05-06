import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Container
} from '@mui/material';
import img from '../../assets/images/products/Lentil-Curl-600x600 1.png';
import size from '../../assets/images/products/PSS9 1.png';

const productData = [
    ['Moisture (%)', '8.5–9.5'],
    ['Products Pcs in 10g', '60'],
    ['Bulk Density (Before Fry)', '546 Gm/Ltr'],
    ['Bulk Density (After Fry)', '47 Gm/Ltr'],
    ['Salt (%)', '2.5–3.0'],
    ['Frying Temperature', '185°C to 190°C'],
    ['Frying Time', '15–17 Second'],
    ['Size', '(4) to (6) cm'],
    ['Ingredients', 'Wheat flour - corn starch - salt'],
];

const SingleProduct = () => {
    return (
        <Box sx={{pt:"150px"}}>
            <Container maxWidth={"xl"}>
                <Box sx={{p: {xs: 0, sm: "4"}, mx: 'auto'}}>
                    <Grid container spacing={4} alignItems="center">
                        {/* Left: Images */}
                        <Grid item size={{xs: 12, md: 6}}>
                            <Box sx={{display: {sm: 'flex', md: 'block'}}}>
                                <Box sx={{textAlign: 'center', mb: 2}}>
                                    <Box
                                        component="img"
                                        src={img}
                                        alt="Mad Stick Product"
                                        sx={{
                                            width: {xs: '300px', sm: '220px', md: '300px'},
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                                <Box sx={{textAlign: 'center'}}>
                                    <Box
                                        component="img"
                                        src={size}
                                        alt="Mad Stick Size"
                                        sx={{
                                            width: {xs: '80%', sm: '60%', md: '70%'},
                                            maxWidth: '100%',
                                            height: 'auto',
                                        }}
                                    />
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right: Text Content */}
                        <Grid item size={{xs: 12, md: 6}}>
                            <Typography variant="h5" color="orange" fontWeight="bold" gutterBottom>
                                MAD STICK
                            </Typography>
                            <Typography variant="subtitle2" gutterBottom>
                                Product Code : 111
                            </Typography>

                            <Typography variant="h6" gutterBottom>
                                Product Parameters
                            </Typography>

                            <Table size="small">
                                <TableBody>
                                    {productData.map(([label, value], index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{fontWeight: 'bold'}}>{label}</TableCell>
                                            <TableCell>{value}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Typography variant="body2" sx={{mt: 2, color: 'gray'}}>
                                Many pellets, including the one in the picture, are manufactured using a dough foil
                                which texture/design is protected by Community and International trademarks and other
                                MAFIN IP rights.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default SingleProduct;

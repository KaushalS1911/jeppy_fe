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
import { useParams } from 'react-router-dom';
import { getProductById } from '../../data/productsData';

const SingleProduct = () => {
    const { id } = useParams();
    const product = getProductById(id);

    if (!product) {
        return (
            <Box sx={{ pt: "150px", textAlign: "center", py: 8 }}>
                <Typography variant="h4">Product not found</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{
            backgroundColor: "#C37A3D",
            width: "100%",
            minHeight: "100vh",
            pt: 24,
            pb: { xs: 4, md: 8 },
        }}>
            <Container maxWidth="xl">
                {/* Product Title Section */}
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Typography
                    className="jua"
                        variant="h2"
                        sx={{
                            color: "white",
                            fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem", lg: "5rem" },
                            fontWeight: 700,
                            mb: 2,
                        }}
                    >
                        {product.name}
                    </Typography>
                    <Box
                        sx={{
                            display: "inline-block",
                            backgroundColor: "white",
                            borderRadius: "8px",
                            px: 3,
                            py: 1,
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#C37A3D",
                                fontWeight: 600,
                                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            }}
                        >
                            {product.type}
                        </Typography>
                    </Box>
                </Box>

                {/* White Card Container */}
                <Box
                    sx={{
                        backgroundColor: "white",
                        borderRadius: { xs: 3, md: 5 },
                        p: { xs: 3, sm: 4, md: 5, lg: 6 },
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        maxWidth: "1400px",
                        margin: "0 auto",
                        width: "100%",
                    }}
                >
                    <Grid container spacing={4} alignItems="center">
                        {/* Left: Images */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ display: "flex", gap: 3, flexDirection: { xs: "column", sm: "row" }, mb: 3 }}>
                                <Box sx={{ flex: 1, textAlign: "center" }}>
                                    <Typography variant="body2" sx={{ mb: 1, color: "#666", fontWeight: 500 }}>
                                        Raw
                                    </Typography>
                                    <Box
                                        component="img"
                                        src={product.rawImage}
                                        alt={`${product.name} Raw`}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "250px",
                                            height: "auto",
                                            borderRadius: "12px",
                                        }}
                                    />
                                </Box>
                                <Box sx={{ flex: 1, textAlign: "center" }}>
                                    <Typography variant="body2" sx={{ mb: 1, color: "#666", fontWeight: 500 }}>
                                        Fried
                                    </Typography>
                                    <Box
                                        component="img"
                                        src={product.friedImage}
                                        alt={`${product.name} Fried`}
                                        sx={{
                                            width: "100%",
                                            maxWidth: "250px",
                                            height: "auto",
                                            borderRadius: "12px",
                                        }}
                                    />
                                </Box>
                            </Box>
                            
                            {/* Main Ingredient Section */}
                            <Box sx={{ mt: 4 }}>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                                    Main Ingredient
                                </Typography>
                                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                                    {[1, 2, 3].map((item) => (
                                        <Box
                                            key={item}
                                            sx={{
                                                flex: "1 1 150px",
                                                minWidth: "120px",
                                                height: "50px",
                                                backgroundColor: "#F5F0E8",
                                                borderRadius: "8px",
                                                border: "1px solid rgba(0, 0, 0, 0.08)",
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right: Product Specifications */}
                        <Grid item xs={12} md={6}>
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Product Specifications
                            </Typography>

                            <Table size="small">
                                <TableBody>
                                    {product.specifications.map((spec, index) => (
                                        <TableRow key={index}>
                                            <TableCell sx={{ fontWeight: 600, borderBottom: "none", py: 1.5 }}>
                                                {spec.label}
                                            </TableCell>
                                            <TableCell sx={{ borderBottom: "none", py: 1.5 }}>
                                                {spec.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>

                            <Typography variant="body2" sx={{ mt: 3, color: "#666", lineHeight: 1.8 }}>
                                {product.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default SingleProduct;

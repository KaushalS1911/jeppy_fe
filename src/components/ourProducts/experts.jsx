import React from "react";
import { Box, Typography, Button, Container, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Experts = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box sx={{ backgroundColor: "#C37A3D", py: { xs: 4, md: 6 } }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        backgroundColor: "#FFF8F1",
                        borderRadius: 2,
                        p: { xs: 3, md: 6 },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: { xs: 3, md: 4 },
                    }}
                >
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            color: theme.palette.saffron,
                            fontWeight: 700,
                            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
                            lineHeight: 1.3,
                        }}
                    >
                        Ready to Take Your Snack
                        <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />{" "}
                        Line to the Next Level?
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/about")}
                        sx={{
                            backgroundColor: theme.palette.saffron,
                            color: "white",
                            borderRadius: 28,
                            px: { xs: 3, sm: 4 },
                            py: 1.25,
                            textTransform: "none",
                            fontWeight: 700,
                            fontSize: { xs: "14px", sm: "16px", md: "18px" },
                            whiteSpace: "nowrap",
                            border: `2px solid ${theme.palette.saffron}`,
                            transition: "0.3s",
                            "&:hover": {
                                bgcolor: "#fff",
                                color: theme.palette.saffron,
                            },
                        }}
                    >
                        Talk to Our Product Experts
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Experts;

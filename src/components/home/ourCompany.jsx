import React, { useEffect } from 'react';
import { Box, Typography } from "@mui/material";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Img1 from "../../assets/images/home/our Company/7b7ab9dcec7f396d5afb549ee14437deb4d7e466_720-removebg-preview_480.png";
import Img2 from "../../assets/images/home/our Company/b1f621b7f07c140cc09e7407cebcd81863369f90_720-removebg-preview_480.png";

function OurCompany() {
    useEffect(() => {
        AOS.init({ duration: 2000, once: true });
        AOS.refresh();
    }, []);


    return (
        <Box sx={{ py: { xs: 5, md: 10 } }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    mb: 6
                }}
            >
                <Typography
                    className="monserrat"
                    variant="h3"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        fontSize: { xs: '30px', md: '38px' },
                        color: '#000000',
                        my: 1.5
                    }}
                >
                    Our Sister Company
                </Typography>
            </Box>

            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        justifyContent: "center",
                        alignItems: "stretch",
                        height: { xs: 300, sm: 350, md: 500 },
                    }}
                >
                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            overflow: "hidden",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'linear-gradient(90deg, #caefd7, #f4f4f4, #abc9e9)',
                                pointerEvents: "none"
                            }
                        }}
                    >
                        <Box
                            component="img"
                            data-aos="fade-right"
                            src={Img1}
                            alt="WOW Brand"
                            sx={{
                                width: "auto",
                                maxWidth: { xs: "70%", sm: "60%" },
                                maxHeight: "60%",
                                objectFit: "contain",
                                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"
                            }}
                        />
                    </Box>

                    <Box
                        sx={{
                            width: { xs: "100%", md: "50%" },
                            overflow: "hidden",
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            background: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
                            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                            height: '100%',
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "linear-gradient(90deg, #d3f3f1, #e9b7ce)",
                                pointerEvents: "none"
                            }
                        }}
                    >
                        <Box
                            component="img"
                            data-aos="fade-left"
                            src={Img2}
                            alt="PAPPADUM Brand"
                            sx={{
                                width: "auto",
                                maxWidth: { xs: "70%", sm: "60%" },
                                maxHeight: "60%",
                                objectFit: "contain",
                                filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default OurCompany;

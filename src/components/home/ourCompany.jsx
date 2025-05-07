import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Img1 from "../../assets/images/home/our Company/7b7ab9dcec7f396d5afb549ee14437deb4d7e466_720-removebg-preview_480.png";
import Img2 from "../../assets/images/home/our Company/b1f621b7f07c140cc09e7407cebcd81863369f90_720-removebg-preview_480.png"
function OurCompany() {
    return (
        <>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 6
            }}>

                <Typography
                    className="monserrat"
                    variant="h3"
                    component="h2"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        fontSize: {xs: '30px', md: '38px'},
                        color: '#000000',
                        my: 1.5
                    }}
                >
                    Our Sister's Company
                </Typography>

            </Box> <Box>
            {/* Title with decorative elements */}


            {/* Logo Container */}
            <Box sx={{
                display: "flex",
                flexDirection: {xs: "column", md: "row"},
                justifyContent: "center",
                alignItems: "stretch",
                mb: 10,
                height: {xs: 240, sm: 280, md: 500},
            }}>
                {/* WOW Logo */}
                <Box sx={{
                    width: {xs: "100%", md: "50%"},
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease", height: '100%',

                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "radial-gradient(circle at top right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
                        pointerEvents: "none"
                    }
                }}>
                    <Box
                        component="img"
                        src={Img1}
                        alt="WOW Brand"
                        sx={{
                            width: "auto",
                            maxWidth: {xs: "70%", sm: "60%"},
                            maxHeight: "60%",
                            objectFit: "contain",
                            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"
                        }}
                    />
                </Box>

                {/* PAPPADUM Logo */}
                <Box sx={{
                    width: {xs: "100%", md: "50%"},
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.08)",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    height: '100%',
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "radial-gradient(circle at top left, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
                        pointerEvents: "none"
                    }
                }}>
                    <Box
                        component="img"
                        src={Img2}
                        alt="PAPPADUM Brand"
                        sx={{
                            width: "auto",
                            maxWidth: {xs: "70%", sm: "60%"},
                            maxHeight: "60%",
                            objectFit: "contain",
                            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.1))"
                        }}
                    />
                </Box>
            </Box>
        </Box>
        </>
    );
}

export default OurCompany;
import React from 'react';
import {Box, Container, Typography} from "@mui/material";

function Snackingvision() {

    return (
        <>
            <Box sx={{
                backgroundColor: "rgba(242, 138, 30, 1)",
                py: 8,
                color: "white",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Container maxWidth={"xl"}>
                    <Box sx={{textAlign: 'center', px: {xs: 3, md: 0,}}}>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 300,
                                fontSize: {md: "24px", sm: "20px", xs: "16px"},
                                lineHeight: '34px',
                                letterSpacing: '-2%',
                            }}
                        >
                            EVERYTHING YOU NEED
                        </Typography>

                        <Typography
                            variant="h5"
                            className={'monserrat'}
                            sx={{
                                fontWeight: 700,
                                fontSize: {md: "55px", sm: "39px", xs: "28px"},
                                lineHeight: {md: "65px", sm: "49px", xs: "37px"},
                                letterSpacing: '0%',
                            }}
                        >
                            We turn your snacking vision into reality
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                fontSize: {md: "22px", sm: "20px", xs: "16px"},
                                lineHeight: '34px',
                                letterSpacing: '-2%',
                                mt: 3
                            }}
                        >
                            Whether it’s standard shapes or custom blends, we combine smart sourcing, advanced
                            manufacturing, and efficient packaging to create snack solutions that are scalable, safe,
                            and market-ready.
                        </Typography>

                    </Box>
                </Container>
            </Box>
        </>
    );
}

export default Snackingvision;

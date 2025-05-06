import React from 'react';
import {Box, Button, Container, Typography, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Header( {heading , subtext ,buttonText , img , bgcolor , path} ) {

    const theme = useTheme();

    const navigate = useNavigate();

    return (
        <Box id={'header'}
            sx={{
                position: 'relative',
                minHeight: '100vh',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                zIndex: 1,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: bgcolor,
                    zIndex: 0,
                }
            }}
        >
            <Container sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 3,
                        color: '#161616',
                        fontSize: {md: "64px", sm: "48px", xs: "36px"},
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mb: 5,
                        color: '#000',
                        fontSize: {md: "24px", sm: "20px", xs: "16px"},
                    }}
                >
                    {subtext}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: `${theme.palette.headerButton}`,
                        color: '#fff',
                        p: {sm:"22px 32px" , xs:"15px 22px"},
                        fontWeight: 600,
                        fontSize: {md: "24px", sm: "20px", xs: "16px"},
                        textTransform: 'none',
                        borderRadius: '50px',
                        border:`2px solid transparent`,
                        transition:"0.3s",
                        '&:hover': {
                            backgroundColor: '#FFF',
                            color: `${theme.palette.headerButton}`,
                            border:`2px solid ${theme.palette.headerButton}`,
                        },
                    }}
                    onClick={() => navigate(path)}
                >
                    {buttonText}
                </Button>
            </Container>
        </Box>
    );
}

export default Header;
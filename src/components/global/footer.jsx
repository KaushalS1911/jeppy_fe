import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme, 
    IconButton,
    Stack,
} from '@mui/material';
import Logo from '../../assets/images/global/jeepy-logo.png';
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const quickLink = [
        {label: 'Products', path: '/products'},
        {label: 'Our Process', path: '/process'},
        {label: 'About us', path: '/about'},
        {label: 'Contact', path: '/contact'},
    ];
    
    const icons = [
        {
            icon: <FacebookIcon fontSize="medium" />,
            color: '#0866FF',
            label: 'Facebook',
            link: 'https://www.facebook.com/WOW.Jeppy',
        },
        {
            icon: <LinkedInIcon fontSize="medium" />,
            color: '#0077B5',
            label: 'LinkedIn',
            link: 'https://www.linkedin.com/company/jayant-snacks-and-beverages-private-limited',
        },
        {
            icon: <InstagramIcon fontSize="medium" />,
            color: '#F16B66',
            label: 'Instagram',
            link: 'https://www.instagram.com/jeppy.wow',
        },
    ];
    
    const address = 'JAYANT SNACKS & BEVERAGES PVT. LTD.\n27 - NH, Ring Road, Near Mira Udhyog, Nr. Bansidhar Weigh Bridge, Rajkot - 360003 (Gujarat) India.';

    return (
        <Box
            sx={{
                backgroundColor: `${theme.palette.saffron}`,
                color: "white",
                pt: { xs: 4, sm: 5, md: 6 },
                pb: 2,
            }}
        >
            <Container maxWidth="xl">
                {/* Logo at top center */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 4
                    }}
                >
                    <Box
                        component={Link}
                        to="/"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            width: { xs: "250px", sm: "300px" }
                        }}
                    >
                        <Box
                            component="img"
                            src={Logo}
                            alt="Logo"
                            sx={{
                                width: "100%",
                                objectFit: "contain",
                            }}
                        />
                    </Box>
                </Box>

                {/* Address */}
                <Box sx={{ mb: 3 }}>
                    <Typography 
                        align="center" 
                        sx={{ 
                            mb: 2,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 1
                        }}
                    >
                        <LocationOnIcon /> 
                        <Typography component="span" sx={{ fontWeight: "500" }}>
                            {address}
                        </Typography>
                    </Typography>
                </Box>

                {/* Email and Phone in a single line */}
                <Box 
                    sx={{ 
                        display: "flex", 
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: { xs: 2, sm: 4 },
                        mb: 4
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <PhoneIcon />
                        <Typography>+91 75758 08749</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <EmailIcon />
                        <Box>
                            <Typography component="span">inquiry@jeppy.in, </Typography>
                            <Typography component="span">export@jeppy.in</Typography>
                        </Box>
                    </Box>
                </Box>

                {/* Social Media Icons */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        mb: 4
                    }}
                >
                    {icons.map((item, index) => (
                        <IconButton
                            key={index}
                            component={Link}
                            to={item.link}
                            target="_blank"
                            rel="noopener"
                            sx={{
                                padding: "10px 10px",
                                backgroundColor: "rgba(255, 255, 255, 0.3)",
                                borderRadius: "50%",
                                transition: "all 0.3s ease-in-out",
                                color: "#000",
                                "&:hover": {
                                    backgroundColor: item.color,
                                    color: "white",
                                },
                            }}
                        >
                            {item.icon}
                        </IconButton>
                    ))}
                </Box>

                {/* Quick Links in row */}
                <Stack 
                    direction="row" 
                    spacing={3} 
                    justifyContent="center" 
                    flexWrap="wrap"
                    sx={{ mb: 4, gap: 2 }}
                >
                    {quickLink.map((link, index) => (
                        <Box
                            key={index}
                            component={Link}
                            to={link.path}
                            sx={{
                                color: "white",
                                fontWeight: "500",
                                textDecoration: "none",
                                "&:hover": { textDecoration: "underline" },
                            }}
                            onClick={() => navigate(link.path)}
                        >
                            {link.label}
                        </Box>
                    ))}
                </Stack>

                <Box
                    sx={{
                        my: 4,
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)",
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -4,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                        },
                    }}
                />

                {/* Copyright */}
                <Box
                    sx={{
                        mt: { xs: 3, md: 4 },
                        fontSize: { xs: "12px", sm: "14px" },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            flexWrap: "wrap",
                            px: { xs: 2, sm: 0 },
                        }}
                    >
                        © COPYRIGHT 2025 JAYANT SNACKS AND BEVERAGES PVT. LTD.
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
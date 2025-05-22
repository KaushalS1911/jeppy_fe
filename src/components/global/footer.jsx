import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    useTheme, IconButton,
} from '@mui/material';
import Logo from '../../assets/images/global/Jeppy Logo - Copy (3).png';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import certificate1
    from '../../assets/images/global/certificates/167-1671625_halal-certification-services-halal-india-logo__2_-removebg-preview__1_-removebg-preview.png';
import certificate2 from '../../assets/images/global/certificates/unnamed.png';
import certificate3 from '../../assets/images/global/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM (1).jpeg';
import certificate4 from '../../assets/images/global/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM.jpeg';
import certificate5 from '../../assets/images/global/certificates/WhatsApp Image 2025-05-06 at 10.55.43 AM (2).jpeg';
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
    ]
    const icons = [
        {icon: <FacebookIcon sx={{fontSize: '35px'}}/>, color: '#0866FF ', label: 'Facebook' , link: 'https://www.facebook.com/WOW.Jeppy'},
        // {icon: <TwitterIcon sx={{fontSize: '35px'}}/>, color: '#249EF0', label: 'Twitter'},
        {icon: <LinkedInIcon sx={{fontSize: '35px'}}/>, color: '#0077B5', label: 'LinkedIn' , link: 'https://www.linkedin.com/company/jayant-snacks-and-beverages-private-limited'},
        {icon: <InstagramIcon sx={{fontSize: '35px'}}/>, color: '#F16B66', label: 'Instagram', link: 'https://www.instagram.com/jeppy.wow'},
    ];
    const contact = [
        {icon: <PhoneIcon sx={{fontSize: {sm: '35px', xs: "30px"}}}/>, title: '+91 75758 08749'},
        {icon: <EmailIcon sx={{fontSize: {sm: '35px', xs: "30px"}}}/>, title: 'hello@jeppy.in'},
        {
            icon: <LocationOnIcon sx={{fontSize: {sm: '35px', xs: "30px"}}}/>,
            title: 'JAYANT SNACKS & BEVERAGES PVT. LTD.\n' +
                '\n27 - NH, Ring Road, Near Mira Udhyog, Nr. Bansidhar Weigh Bridge, Rajkot - 360003 (Gujarat) India. '
        },
    ]


    return (
        <Box sx={{backgroundColor: `${theme.palette.saffron}`, color: 'white', pt: {xs: 4, sm: 5, md: 6}, pb: 2}}>
            <Container maxWidth="xl">

                <Grid container justifyContent={'space-between'} spacing={{xs: 4, sm: 6, md: 10}}>
                    <Grid item size={{md: 5, xs: 12, lg: 4}}>
                        <Box component={Link} to="/" sx={{
                            mb: {xs: 3, md: 5},
                            display: 'flex',
                            justifyContent: {xs: 'center', md: 'flex-start'},
                        }}>
                            <Box sx={{
                                height: '100%',
                                width: '300px',
                            }}>
                                <Box component="img" src={Logo} alt="Logo"
                                     sx={{height: {xs: '100%', sm: '100%'}, width: '100%', objectFit: 'contain'}}/>
                            </Box>
                        </Box>

                        <Box>
                            <Typography component={'h2'} className={'monserrat'}
                                        sx={{
                                            fontSize: {md: '24px', sm: "20px", xs: "18px"},
                                            fontWeight: 700,
                                            pb: 2,
                                            display: 'flex',
                                            justifyContent: {xs: "center", md: "unset"}
                                        }}>
                                Our Certificates
                            </Typography>
                            <Grid
                                container
                                spacing={1.5}
                                sx={{
                                    mt: 1,
                                    alignItems: 'center',
                                    justifyContent: {xs: "center", md: "flex-start"}
                                }}
                            >
                                {[certificate1, certificate2, certificate3, certificate4, certificate5].map((cert, idx) => (
                                    <Grid item key={idx} size={{sm: 4, xs: 6}}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: {xs: "center", md: "unset"},
                                            alignItems: 'center'
                                        }}>
                                            <img
                                                src={cert}
                                                alt={`Certificate ${idx + 1}`}
                                                style={{width: 100, height: 100, objectFit: 'cover'}}
                                            />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item size={{md: 6, xs: 12, lg: 7}}>
                        <Grid container spacing={{xs: 4, sm: 7}}>
                            <Grid item size={{sm: 3, xs: 6, md: 6, lg: 3}}>
                                <Typography
                                    fontWeight="700"
                                    mb={2}
                                    textAlign={{xs: 'center', md: 'left'}}
                                >
                                    Quick links
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: {xs: 'center', md: 'flex-start'}
                                }}>
                                    {quickLink.map((text, index) => (
                                        <Box
                                            key={index}
                                            component={Link}
                                            to={text.path}
                                            sx={{
                                                display: 'block',
                                                color: 'white',
                                                fontWeight: '300',
                                                lineHeight: {xs: '24px', sm: '29px'},
                                                textDecoration: 'none',
                                                mb: 1,
                                                '&:hover': {textDecoration: 'underline'},
                                            }}
                                            onClick={() => navigate(text.path)}
                                        >
                                            {text.label}
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            <Grid item size={{sm: 3, xs: 6, md: 6, lg: 3}}>
                                <Typography
                                    fontWeight="bold"
                                    mb={2}
                                    textAlign={{xs: 'center', md: 'left'}}
                                >
                                    Products
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: {xs: 'center', md: 'flex-start'}
                                }}>
                                    {[
                                        'Veggie Snacks',
                                        'High Protein',
                                        'Cereal Based',
                                        'Gluten Free',
                                        'Sheeted Pallets',
                                        'Veggi Pallets',
                                    ].map((text) => (
                                        <Box
                                            key={text}
                                            component={Link}
                                            to="/products"
                                            sx={{
                                                display: 'block',
                                                color: 'white',
                                                fontWeight: '300',
                                                lineHeight: {xs: '24px', sm: '29px'},
                                                textDecoration: 'none',
                                                mb: 1,
                                                '&:hover': {textDecoration: 'underline'},
                                            }}
                                        >
                                            {text}
                                        </Box>
                                    ))}
                                </Box>
                            </Grid>

                            <Grid item size={{sm: 6, xs: 12, md: 12, lg: 6}}>
                                <Typography
                                    fontWeight="bold"
                                    mb={2}
                                    textAlign={{xs: 'center', md: 'left'}}
                                >
                                    Contact
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: {xs: 'center', md: 'flex-start'}
                                }}>
                                    {contact.map((text) => (
                                        <Box sx={{display: 'flex'}}>
                                            <Typography
                                                key={text}
                                                sx={{
                                                    mb: 1,
                                                    fontWeight: '300',
                                                    lineHeight: {xs: '24px', sm: '29px'},
                                                    pr: 2
                                                }}
                                            >
                                                {text.icon}
                                            </Typography>
                                            <Typography>
                                                {text.title}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        mt: 5,
                                        justifyContent: {xs: "center", md: 'flex-start'}
                                    }}>
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
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        my: 4,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.7), transparent)',
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: -4,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            boxShadow: '0 0 10px rgba(255,255,255,0.8)'
                        }
                    }}
                />

                <Box sx={{
                    pt: 4,
                    mb: 3,
                    display: {xs: 'flex', md: 'flex'},
                    justifyContent: 'center',
                    gap: 3
                }}>
                    {['Cookies', 'Policy', 'Terms'].map((item) => (
                        <Box
                            key={item}
                            sx={{
                                fontSize: {xs: '14px', sm: '16px'},
                                fontWeight: 500,
                                cursor: 'pointer',
                                '&:hover': {textDecoration: 'underline'},
                                px: {sm: 5, xs: 2.5}
                            }}
                        >
                            {item}
                        </Box>
                    ))}
                </Box>

                <Box
                    sx={{
                        mt: {xs: 3, md: 6},
                        fontSize: {xs: '12px', sm: '14px'},
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        flexWrap: 'wrap',
                        px: {xs: 2, sm: 0}
                    }}>
                        © COPYRIGHT 2004 – 2025 JAYANT SNACKS AND BEVERAGES PVT. LTD. ALL RIGHTS RESERVED. POWERED
                        BY{' '}
                        <span style={{marginRight: '4px'}}></span>
                        <Box
                            target="_blank"
                            rel="noopener"
                            underline="hover"
                            sx={{color: 'white'}}
                        >
                            WEBSMANIAC INC.
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
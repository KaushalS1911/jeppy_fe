import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    IconButton,
    Link as MuiLink,
    useTheme,
} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Logo from '../../assets/images/global/logo.jpg';

const Footer = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const quickLink = [
        { label: 'Our Products', path: '/products' },
        { label: 'Our Process', path: '/process' },
        { label: 'About us', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ]

    return (
        <Box sx={{backgroundColor: `${theme.palette.saffron}`, color: 'white', pt: {xs: 4, sm: 5, md: 6}, pb: 2}}>
            <Container maxWidth="xl">
                <Box component={Link} to="/" sx={{mb: {xs: 3, md: 5}, display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'}}}>
                    <Box component="img" src={Logo} alt="Logo" sx={{height: {xs: 30, sm: 40}}}/>
                </Box>

                <Grid container spacing={{xs: 4, sm: 6, md: 10}}>
                    <Grid item size={{ md:5 , xs:12 }}>
                        <Box sx={{
                            display: 'flex',
                            gap: 2,
                            mb: 3,
                            justifyContent: {xs: 'center', md: 'flex-start'}
                        }}>
                            {['Facebook', 'Instagram', 'LinkedIn', 'Pinterest'].map((platform) => (
                                <Typography
                                    key={platform}
                                    variant="body2"
                                    sx={{
                                        cursor: 'pointer',
                                        fontSize: {xs: '14px', sm: '16px'},
                                        '&:hover': {textDecoration: 'underline'},
                                    }}
                                >
                                    {platform}
                                </Typography>
                            ))}
                        </Box>

                        <Typography sx={{
                            mb: 1,
                            mt: {xs: 4, md: 6},
                            textAlign: {xs: 'center', md: 'left'},
                            fontSize: {xs: '16px', sm: '18px'}
                        }}>
                            Let's Connect with us for updates
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center' , justifyContent: {xs:"center" , md:"unset"}, mt: 3}}>
                            <TextField
                                variant="standard"
                                placeholder="Enter Your E-mail Address"
                                InputProps={{
                                    disableUnderline: false,
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton sx={{color: 'white', p: 0}}>
                                                <ArrowOutwardIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    input: {
                                        color: 'white',
                                        fontWeight: 'bold',
                                        '::placeholder': {
                                            color: 'white',
                                            fontSize: {xs: '14px', sm: '16px'},
                                            opacity: 1,
                                            fontWeight: 'bold',
                                        },
                                    },
                                    '& .MuiInputBase-root': {
                                        pb: '4px',
                                    },
                                    '& .MuiInput-underline:before': {
                                        borderBottomColor: 'rgba(255,255,255,0.5)',
                                    },
                                    '& .MuiInput-underline:hover:before': {
                                        borderBottomColor: 'white',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: 'white',
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{
                            pt: {xs: 5, md: 9},
                            display: {xs: 'none', md: 'block'}
                        }}>
                            <Box sx={{
                                display: 'flex',
                                gap: 3,
                                justifyContent: {xs: 'center', md: 'flex-start'}
                            }}>
                                {['Cookies', 'Policy', 'Terms'].map((item) => (
                                    <Box
                                        key={item}
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            '&:hover': {textDecoration: 'underline'},
                                        }}
                                    >
                                        {item}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item size={{ md:6 , xs:12 }}>
                        <Grid container spacing={{xs: 4, sm: 7}}>
                            <Grid item size={{ sm:4 , xs:6 }}>
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
                                    {quickLink.map((text , index) => (
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

                            <Grid item size={{ sm:4 , xs:6 }}>
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
                                        '2D Pallets',
                                        '3D Pallets',
                                        'Gluten Free Pallets',
                                        'Micro Pallets',
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

                            <Grid item size={{ sm:4 , xs:12 }}>
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
                                    {['Gratis Termin', 'Freunde einladen', 'Patienteninformationen'].map((text) => (
                                        <Typography
                                            key={text}
                                            sx={{
                                                mb: 1,
                                                fontWeight: '300',
                                                lineHeight: {xs: '24px', sm: '29px'},
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Box sx={{
                    pt: 4,
                    mb: 3,
                    display: {xs: 'flex', md: 'none'},
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
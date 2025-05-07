import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    IconButton,
    Collapse,
    List,
    ListItem, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../../assets/images/global/logo.jpg';

const navItems = [
    { label: 'Products', path: '/products' },
    { label: 'Our Process', path: '/process' },
    { label: 'About us', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

function Navbar() {
    const [a,setA] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const b = location.pathname.split("/")[1] === "product";
        setA(b);
    }, [location]);
    const [menuOpen, setMenuOpen] = useState(false);
    const theme = useTheme();

    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <Box sx={{
            position: "fixed",
            width:'100%',
            px: {xs:3 , md:5},
            zIndex: 999,
        }}>
            <Container
                maxWidth="xxl"
                sx={{
                    backgroundColor: a ? `${theme.palette.saffron}` : '#fff',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    px: 3,
                    py: 1,
                    mt: 2,
                }}
            >
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding:"0px 41px"
                }}>
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="img" src={Logo} alt="Logo" sx={{ height: {md:"100%" , xs:"40px"} }} />
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        {navItems.map(({ label, path }) => (
                            <Box
                                key={label}
                                component={Link}
                                to={path}
                                className={'monserrat'}
                                sx={{
                                    color: a ? "#fff" :  "#000",
                                    p:0,
                                    fontWeight: 500,
                                    textTransform: 'none',
                                    fontSize: '20px',
                                    transition: '0.3s',
                                    textDecoration: 'none',
                                    '&:hover': { color: a ? "#000" : `${theme.palette.saffron}`,},
                                }}
                            >
                                {label}
                            </Box>
                        ))}
                    </Box>

                    <IconButton
                        edge="end"
                        onClick={toggleMenu}
                        sx={{ display: { xs: 'block', md: 'none' } , alignItems:"center" , color: a ? "#fff" : '#000' }}
                    >
                        {menuOpen ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>

                </Box>

                <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                    <Box
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            pt:'10px',
                        }}
                    >
                        <List>
                            {navItems.map(({ label, path }) => (
                                <ListItem key={label} sx={{ px: 0 }}>
                                    <Box
                                        component={Link}
                                        to={path}
                                        fullWidth
                                        onClick={() => setMenuOpen(false)}
                                        sx={{
                                            justifyContent: 'flex-start',
                                            color: a ? "#fff" :  `${theme.palette.saffron}`,
                                            padding: '0px',
                                            fontWeight: 400,
                                            textDecoration: 'none',
                                            textTransform: 'none',
                                            transition: '0.3s',
                                            fontSize: '20px',
                                            '&:hover': { color: '#f78c1f' },
                                        }}
                                    >
                                        {label}
                                    </Box>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Collapse>
            </Container>
        </Box>
    );
}

export default Navbar;

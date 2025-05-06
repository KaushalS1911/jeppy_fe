import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    IconButton,
    Button,
    Collapse,
    List,
    ListItem, useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {Link, useLocation} from 'react-router-dom';
import Logo from '../../assets/images/global/logo.jpg';

const navItems = [
    { label: 'Our Products', path: '/products' },
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
            position: a ? "sticky" : "absolute",
            width:'100%',
            px: {xs:3 , md:5},
            zIndex: 999,
        }}>
            <Container
                maxWidth="xxl"
                sx={{
                    backgroundColor: a ? `${theme.palette.saffron}` : '#fff',
                    borderRadius: {md:'50px',xs:'50px'},
                    display: 'flex',
                    flexDirection: 'column',
                    px: 3,
                    py: 1,
                    mt: 2,
                }}
            >
                {/* Top Navigation Row */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding:"0px 41px"
                }}>
                    {/* Logo */}
                    <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box component="img" src={Logo} alt="Logo" sx={{ height: {md:"100%" , xs:"40px"} }} />
                    </Box>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
                        {navItems.map(({ label, path }) => (
                            <Box
                                key={label}
                                component={Link}
                                to={path}
                                sx={{
                                    color: a ? "#fff" :  "#000",
                                    p:0,
                                    fontWeight: 400,
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

                    {/* Mobile Menu Icon */}
                <IconButton
                    edge="end"
                    onClick={toggleMenu}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    {menuOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                </Box>

                {/* Mobile Dropdown Drawer Inside Navbar */}
                <Collapse in={menuOpen} timeout="auto" unmountOnExit>
                    <Box
                        sx={{
                            // mt: 1,
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
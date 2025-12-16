import {Box, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import {Dashboard, Inventory2, Logout, Newspaper, ReceiptLong} from '@mui/icons-material';
import {NavLink, useNavigate} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext.jsx';

const navItems = [
    {label: 'Overview', icon: <Dashboard/>, path: '/admin'},
    {label: 'Products', icon: <Inventory2/>, path: '/admin/products'},
    {label: 'Leads', icon: <ReceiptLong/>, path: '/admin/leads'},
    {label: 'Orders', icon: <ReceiptLong/>, path: '/admin/orders'},
    {label: 'Content', icon: <Newspaper/>, path: '/admin/content'}
];

function AdminSidebar() {
    const navigate = useNavigate();
    const {logout} = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <Box
            component="aside"
            sx={{
                width: 260,
                flexShrink: 0,
                backgroundColor: '#121212',
                color: '#fff',
                minHeight: '100vh',
                display: {xs: 'none', md: 'flex'},
                flexDirection: 'column',
                borderRight: '1px solid rgba(255,255,255,0.08)'
            }}
        >
            <Box sx={{px: 3, py: 4}}>
                <Typography variant="h6" sx={{fontWeight: 700, letterSpacing: 0.5}}>
                    Jeppy Admin
                </Typography>
                <Typography variant="body2" color="rgba(255,255,255,0.6)">
                    Manage the entire catalogue
                </Typography>
            </Box>
            <List sx={{flexGrow: 1}}>
                {navItems.map((item) => (
                    <ListItemButton
                        key={item.path}
                        component={NavLink}
                        to={item.path}
                        sx={{
                            color: '#fff',
                            '&.active': {
                                backgroundColor: 'rgba(255,255,255,0.12)'
                            }
                        }}
                    >
                        <ListItemIcon sx={{color: '#fff'}}>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.label}/>
                    </ListItemButton>
                ))}
            </List>
            <List>
                <ListItemButton onClick={handleLogout} sx={{color: '#fff'}}>
                    <ListItemIcon sx={{color: '#fff'}}>
                        <Logout/>
                    </ListItemIcon>
                    <ListItemText primary="Logout"/>
                </ListItemButton>
            </List>
        </Box>
    );
}

export default AdminSidebar;



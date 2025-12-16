import {Avatar, Box, IconButton, Typography} from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import {useAuth} from '../../context/AuthContext.jsx';

function AdminTopbar({onMenuToggle}) {
    const {user} = useAuth();

    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid',
                borderColor: 'rgba(0,0,0,0.08)',
                px: 2,
                py: 1.5,
                backgroundColor: '#fff'
            }}
        >
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <IconButton
                    aria-label="Open sidebar"
                    onClick={onMenuToggle}
                    sx={{display: {md: 'none'}, border: '1px solid rgba(0,0,0,0.12)'}}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" sx={{fontWeight: 600}}>
                    Admin Console
                </Typography>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1.5}}>
                <IconButton aria-label="Notifications">
                    <NotificationsNoneIcon/>
                </IconButton>
                <Avatar sx={{width: 36, height: 36}}>
                    {(user?.name || 'JA').substring(0, 2).toUpperCase()}
                </Avatar>
            </Box>
        </Box>
    );
}

export default AdminTopbar;



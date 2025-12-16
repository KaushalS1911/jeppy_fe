import {Box, Drawer} from '@mui/material';
import {useState} from 'react';
import {Outlet} from 'react-router-dom';
import AdminSidebar from '../../components/admin/AdminSidebar.jsx';
import AdminTopbar from '../../components/admin/AdminTopbar.jsx';

function AdminShell() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <Box sx={{display: 'flex', backgroundColor: '#f5f5f5', minHeight: '100vh'}}>
            <AdminSidebar/>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                sx={{display: {md: 'none'}}}
            >
                <AdminSidebar/>
            </Drawer>
            <Box sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <AdminTopbar onMenuToggle={() => setDrawerOpen(true)}/>
                <Box component="section" sx={{p: {xs: 2, md: 3}, flexGrow: 1}}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
}

export default AdminShell;



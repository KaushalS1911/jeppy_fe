import {Box, Button, Paper, TextField, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import {useAuth} from '../../context/AuthContext.jsx';
import {useLocation, useNavigate} from 'react-router-dom';

function AdminLogin() {
    const {login, loading, error} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/admin';

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    async function onSubmit(values) {
        const result = await login(values);
        if (result.success) {
            navigate(from, {replace: true});
        }
    }

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(120deg,#F6D365,#FDA085)'
            }}
        >
            <Paper elevation={6} sx={{p: 4, width: '100%', maxWidth: 420}}>
                <Typography variant="h4" sx={{fontWeight: 700, mb: 0.5}}>
                    Admin login
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
                    Secure access to Jeppy operations console
                </Typography>
                <Box component="form" onSubmit={form.handleSubmit(onSubmit)} sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                    <TextField
                        label="Work email"
                        type="email"
                        fullWidth
                        {...form.register('email', {required: true})}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        {...form.register('password', {required: true})}
                    />
                    {error && (
                        <Typography color="error" variant="body2">
                            {error}
                        </Typography>
                    )}
                    <Button type="submit" variant="contained" size="large" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign in'}
                    </Button>
                </Box>
            </Paper>
        </Box>
    );
}

export default AdminLogin;



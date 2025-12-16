import {Box, Typography} from '@mui/material';

function StatCard({label, value, trendLabel, trendColor = 'success.main'}) {
    return (
        <Box
            sx={{
                p: 3,
                borderRadius: 3,
                border: '1px solid rgba(0,0,0,0.08)',
                backgroundColor: '#fff',
                minHeight: 140
            }}
        >
            <Typography variant="body2" color="text.secondary">
                {label}
            </Typography>
            <Typography variant="h4" sx={{fontWeight: 600, mt: 1}}>
                {value}
            </Typography>
            {trendLabel && (
                <Typography variant="body2" sx={{color: trendColor, mt: 2}}>
                    {trendLabel}
                </Typography>
            )}
        </Box>
    );
}

export default StatCard;



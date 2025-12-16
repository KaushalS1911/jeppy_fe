import {Box, Card, CardContent, CardHeader, LinearProgress, List, ListItem, ListItemText, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import StatCard from '../../components/admin/StatCard.jsx';

const latestActivities = [
    {title: 'Wheel Pellet inventory synced', subtitle: 'Inventory automation • 2m ago'},
    {title: 'New B2B inquiry from Dubai', subtitle: 'Contact pipeline • 12m ago'},
    {title: 'Quality docs updated', subtitle: 'Content library • 56m ago'}
];

function AdminDashboard() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={3}>
                    <StatCard label="Active Products" value="48" trendLabel="+6 new SKUs this quarter"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatCard label="Open Orders" value="112" trendLabel="42 awaiting QA sign-off"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatCard label="Avg Lead Time" value="8.4 days" trendLabel="-1.2 days vs last month" trendColor="primary.main"/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <StatCard label="Pending Approvals" value="5" trendLabel="Docs awaiting release"/>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardHeader title="Production Capacity"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Rolling 4-week utilization
                            </Typography>
                            <Typography variant="h3" sx={{fontWeight: 600, mt: 1}}>
                                86%
                            </Typography>
                            <LinearProgress variant="determinate" value={86} sx={{mt: 3, height: 12, borderRadius: 6}}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardHeader title="Latest Activity"/>
                        <CardContent>
                            <List dense>
                                {latestActivities.map((item) => (
                                    <ListItem key={item.title} disablePadding sx={{mb: 1.5}}>
                                        <ListItemText
                                            primary={item.title}
                                            secondary={item.subtitle}
                                            primaryTypographyProps={{fontWeight: 600}}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdminDashboard;



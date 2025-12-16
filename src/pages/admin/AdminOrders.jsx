import {DataGrid} from '@mui/x-data-grid';
import {Box, Card, CardContent, CardHeader, Chip, Typography} from '@mui/material';

const rows = [
    {id: 'ord-1001', customer: 'SnackCo UAE', status: 'processing', volume: '12 MT', eta: 'Dec 08'},
    {id: 'ord-1002', customer: 'Foodlabs Berlin', status: 'awaiting QA', volume: '4 MT', eta: 'Dec 05'},
    {id: 'ord-1003', customer: 'RetailMix India', status: 'shipped', volume: '8 MT', eta: 'Dec 02'}
];

const columns = [
    {field: 'id', headerName: 'Order ID', flex: 1},
    {field: 'customer', headerName: 'Customer', flex: 1.5},
    {field: 'volume', headerName: 'Volume', flex: 0.7},
    {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        renderCell: (params) => (
            <Chip
                size="small"
                label={params.value}
                color={params.value === 'shipped' ? 'success' : params.value === 'processing' ? 'warning' : 'info'}
            />
        )
    },
    {field: 'eta', headerName: 'ETA', flex: 0.7}
];

function AdminOrders() {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <Box>
                <Typography variant="h5" sx={{fontWeight: 600}}>
                    Fulfilment Pipeline
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Live snapshot from production to dispatch
                </Typography>
            </Box>
            <Card>
                <CardHeader title="Logistics board"/>
                <CardContent>
                    <Box sx={{height: 360}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            disableRowSelectionOnClick
                            sx={{border: 'none'}}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default AdminOrders;



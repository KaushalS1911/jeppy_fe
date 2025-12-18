import {useEffect, useState} from 'react';
import {Box, Button, Chip, Paper, Typography} from '@mui/material';
import {DataGrid} from '@mui/x-data-grid';
import RefreshIcon from '@mui/icons-material/Refresh';
import {fetchLeads, updateLeadStatus} from '../../services/leadService.js';

const statusOptions = [
    {value: 'new', label: 'New', color: 'warning'},
    {value: 'in_progress', label: 'In progress', color: 'info'},
    {value: 'closed', label: 'Closed', color: 'success'}
];

function StatusCell({value, onChange}) {
    const current = statusOptions.find((item) => item.value === value);
    return (
        <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
            <Chip
                size="small"
                label={current?.label || value}
                color={current?.color || 'default'}
                variant="filled"
            />
            <Button
                size="small"
                variant="text"
                onClick={onChange}
                sx={{textTransform: 'none'}}
            >
                Advance
            </Button>
        </Box>
    );
}

function AdminLeads() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function loadData() {
        try {
            setLoading(true);
            setError(null);
            const data = await fetchLeads();
            setRows(data);
        } catch (err) {
            setError(err.message || 'Unable to load leads');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    const columns = [
        {field: 'company', headerName: 'Company', flex: 1.1},
        {field: 'contactName', headerName: 'Contact', flex: 1},
        {field: 'email', headerName: 'Email', flex: 1.1},
        {field: 'phone', headerName: 'Phone', flex: 1},
        {field: 'message', headerName: 'Message', flex: 1.5},
        {
            field: 'status',
            headerName: 'Status',
            flex: 0.9,
            renderCell: (params) => (
                <StatusCell
                    value={params.value}
                    onChange={async () => {
                        const nextStatusIndex = (statusOptions.findIndex((item) => item.value === params.value) + 1) % statusOptions.length;
                        const nextStatus = statusOptions[nextStatusIndex].value;
                        const updated = await updateLeadStatus(params.row.id, nextStatus);
                        setRows((prev) => prev.map((lead) => (lead.id === params.row.id ? updated : lead)));
                    }}
                />
            )
        },
        {field: 'createdAt', headerName: 'Received', flex: 0.8}
    ];

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <Typography variant="h5" sx={{fontWeight: 600}}>
                        Leads & Inquiries
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Source: contact form submissions and B2B requests
                    </Typography>
                </div>
                <Button startIcon={<RefreshIcon/>} onClick={loadData} disabled={loading}>
                    Refresh
                </Button>
            </Box>
            <Paper sx={{height: 520}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.id}
                    disableRowSelectionOnClick
                    loading={loading}
                    slots={{
                        noRowsOverlay: () => (
                            <Typography sx={{p: 2}} color="text.secondary">
                                {error || 'No leads found'}
                            </Typography>
                        )
                    }}
                />
            </Paper>
        </Box>
    );
}

export default AdminLeads;




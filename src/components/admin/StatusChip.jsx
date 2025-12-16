import {Chip} from '@mui/material';

const statusMap = {
    active: {label: 'Active', color: 'success'},
    draft: {label: 'Draft', color: 'warning'},
    archived: {label: 'Archived', color: 'default'}
};

function StatusChip({status}) {
    const data = statusMap[status] || {label: 'Unknown', color: 'default'};
    return <Chip size="small" label={data.label} color={data.color}/>;
}

export default StatusChip;



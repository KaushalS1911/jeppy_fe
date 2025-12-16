import {Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {useState} from 'react';

const sections = [
    {key: 'hero', title: 'Homepage hero', helper: 'Headline, sub-copy, CTA button'},
    {key: 'about', title: 'About company', helper: 'Mission copy and stats'},
    {key: 'process', title: 'Process section', helper: 'Steps description'}
];

function AdminContent() {
    const [content, setContent] = useState(() =>
        sections.reduce((acc, section) => ({...acc, [section.key]: ''}), {})
    );

    function handleChange(key, value) {
        setContent((prev) => ({...prev, [key]: value}));
    }

    function handleSave(key) {
        console.log('Saving content', key, content[key]);
        alert('Content saved (wire backend endpoint to persist)');
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <Box>
                <Typography variant="h5" sx={{fontWeight: 600}}>
                    Content Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Sync hero messaging, certifications, and process copy without a deploy
                </Typography>
            </Box>
            <Grid container spacing={3}>
                {sections.map((section) => (
                    <Grid key={section.key} item xs={12} md={6}>
                        <Card>
                            <CardHeader title={section.title} subheader={section.helper}/>
                            <CardContent>
                                <TextField
                                    multiline
                                    minRows={4}
                                    fullWidth
                                    value={content[section.key]}
                                    onChange={(event) => handleChange(section.key, event.target.value)}
                                    placeholder="Start typing..."
                                />
                            </CardContent>
                            <CardActions sx={{justifyContent: 'flex-end'}}>
                                <Button variant="contained" onClick={() => handleSave(section.key)}>
                                    Save draft
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default AdminContent;



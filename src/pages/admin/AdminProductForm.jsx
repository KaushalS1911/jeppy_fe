import {Box, Button, MenuItem, Paper, TextField, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
import {useEffect, useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useNavigate, useParams} from 'react-router-dom';
import {createProduct, fetchProductById, updateProduct} from '../../services/productService.js';

const schema = yup.object({
    name: yup.string().required(),
    sku: yup.string().required(),
    category: yup.string().required(),
    status: yup.string().oneOf(['active', 'draft', 'archived']).required(),
    inventory: yup.number().integer().min(0).required(),
    leadTimeDays: yup.number().integer().min(0).required()
});

const defaultValues = {
    name: '',
    sku: '',
    category: '',
    status: 'active',
    inventory: 0,
    leadTimeDays: 0
};

function AdminProductForm() {
    const {productId} = useParams();
    const isEditMode = Boolean(productId);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);

    const form = useForm({
        defaultValues,
        resolver: yupResolver(schema)
    });

    const pageTitle = useMemo(() => (isEditMode ? 'Edit product' : 'Create product'), [isEditMode]);

    useEffect(() => {
        async function loadProduct() {
            if (!isEditMode) return;
            try {
                setFetching(true);
                const product = await fetchProductById(productId);
                form.reset(product);
            } catch (err) {
                setError(err.message || 'Unable to load product');
            } finally {
                setFetching(false);
            }
        }

        loadProduct();
    }, [isEditMode, productId, form]);

    async function onSubmit(values) {
        setLoading(true);
        setError(null);
        try {
            if (isEditMode) {
                await updateProduct(productId, values);
            } else {
                await createProduct(values);
            }
            navigate('/admin/products');
        } catch (err) {
            setError(err.message || 'Unable to save product');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Paper sx={{p: {xs: 2, md: 3}}}>
            <Typography variant="h5" sx={{fontWeight: 600, mb: 0.5}}>
                {pageTitle}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{mb: 3}}>
                {isEditMode ? `ID: ${productId}` : 'Publish the SKU once QA approves'}
            </Typography>
            <Box
                component="form"
                onSubmit={form.handleSubmit(onSubmit)}
                sx={{display: 'flex', flexDirection: 'column', gap: 3}}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Product name"
                            fullWidth
                            disabled={fetching}
                            {...form.register('name')}
                            error={Boolean(form.formState.errors.name)}
                            helperText={form.formState.errors.name?.message}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="SKU"
                            fullWidth
                            disabled={fetching}
                            {...form.register('sku')}
                            error={Boolean(form.formState.errors.sku)}
                            helperText={form.formState.errors.sku?.message}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Category"
                            fullWidth
                            disabled={fetching}
                            {...form.register('category')}
                            error={Boolean(form.formState.errors.category)}
                            helperText={form.formState.errors.category?.message}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Status"
                            select
                            fullWidth
                            disabled={fetching}
                            {...form.register('status')}
                            error={Boolean(form.formState.errors.status)}
                            helperText={form.formState.errors.status?.message}
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="draft">Draft</MenuItem>
                            <MenuItem value="archived">Archived</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Inventory"
                            type="number"
                            fullWidth
                            disabled={fetching}
                            {...form.register('inventory')}
                            error={Boolean(form.formState.errors.inventory)}
                            helperText={form.formState.errors.inventory?.message}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Lead time (days)"
                            type="number"
                            fullWidth
                            disabled={fetching}
                            {...form.register('leadTimeDays')}
                            error={Boolean(form.formState.errors.leadTimeDays)}
                            helperText={form.formState.errors.leadTimeDays?.message}
                        />
                    </Grid>
                </Grid>
                {error && (
                    <Typography color="error" variant="body2">
                        {error}
                    </Typography>
                )}
                <Box sx={{display: 'flex', justifyContent: 'flex-end', gap: 2}}>
                    <Button variant="outlined" onClick={() => navigate('/admin/products')} disabled={loading}>
                        Cancel
                    </Button>
                    <Button variant="contained" type="submit" disabled={loading || fetching}>
                        {isEditMode ? 'Save changes' : 'Create product'}
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default AdminProductForm;



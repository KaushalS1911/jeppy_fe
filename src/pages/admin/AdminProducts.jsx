import {
    Box,
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RefreshIcon from '@mui/icons-material/Refresh';
import {useEffect, useState} from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import StatusChip from '../../components/admin/StatusChip.jsx';
import {deleteProduct, fetchProducts} from '../../services/productService.js';

function AdminProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    async function loadData() {
        try {
            setLoading(true);
            setError(null);
            const response = await fetchProducts();
            setProducts(response);
        } catch (err) {
            setError(err.message || 'Unable to fetch products');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    async function handleDelete(productId) {
        if (!window.confirm('Delete this product?')) return;
        try {
            await deleteProduct(productId);
            await loadData();
        } catch (err) {
            alert(err.message || 'Unable to delete product');
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div>
                    <Typography variant="h5" sx={{fontWeight: 600}}>
                        Product Catalogue
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Manage SKUs, inventory, and publishing status
                    </Typography>
                </div>
                <Box sx={{display: 'flex', gap: 1}}>
                    <Button
                        variant="outlined"
                        startIcon={<RefreshIcon/>}
                        onClick={loadData}
                        disabled={loading}
                    >
                        Refresh
                    </Button>
                    <Button
                        variant="contained"
                        startIcon={<AddIcon/>}
                        component={RouterLink}
                        to="/admin/products/new"
                    >
                        New Product
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>SKU</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell align="right">Inventory</TableCell>
                            <TableCell align="right">Lead Time (days)</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id} hover>
                                <TableCell>{product.name}</TableCell>
                                <TableCell>{product.sku}</TableCell>
                                <TableCell>{product.category}</TableCell>
                                <TableCell>
                                    <StatusChip status={product.status}/>
                                </TableCell>
                                <TableCell align="right">{product.inventory}</TableCell>
                                <TableCell align="right">{product.leadTimeDays}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => navigate(`/admin/products/${product.id}`)}>
                                        <EditIcon fontSize="small"/>
                                    </IconButton>
                                    <IconButton color="error" onClick={() => handleDelete(product.id)}>
                                        <DeleteIcon fontSize="small"/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                        {!products.length && !loading && (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    {error || 'No products found'}
                                </TableCell>
                            </TableRow>
                        )}
                        {loading && (
                            <TableRow>
                                <TableCell colSpan={7} align="center">
                                    Loading products...
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default AdminProducts;



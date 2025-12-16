import apiClient from './apiClient.js';
import {mockProducts} from '../static/mockProducts.js';
import {readProductsCache, writeProductsCache} from './localStore.js';

function getFallbackProducts() {
    return readProductsCache() || mockProducts;
}

function persistProducts(next) {
    writeProductsCache(next);
    return next;
}

export async function fetchProducts(params = {}) {
    try {
        const {data} = await apiClient.get('/admin/products', {params});
        persistProducts(data);
        return data;
    } catch (error) {
        console.warn('Falling back to mock products. Replace with live API once available.', error);
        return getFallbackProducts();
    }
}

export async function fetchProductById(productId) {
    try {
        const {data} = await apiClient.get(`/admin/products/${productId}`);
        return data;
    } catch (error) {
        const fallback = getFallbackProducts().find((product) => product.id === productId);
        if (fallback) return fallback;
        throw error;
    }
}

export async function createProduct(payload) {
    try {
        const {data} = await apiClient.post('/admin/products', payload);
        return data;
    } catch (error) {
        const next = [
            ...getFallbackProducts(),
            {...payload, id: `local-${Date.now()}`, createdAt: new Date().toISOString()}
        ];
        persistProducts(next);
        console.warn('Product creation saved locally. Wire real API to persist.', error);
        return next[next.length - 1];
    }
}

export async function updateProduct(productId, payload) {
    try {
        const {data} = await apiClient.put(`/admin/products/${productId}`, payload);
        return data;
    } catch (error) {
        const current = getFallbackProducts();
        const next = current.map((item) => (item.id === productId ? {...item, ...payload} : item));
        persistProducts(next);
        console.warn('Product update saved locally. Wire real API to persist.', error);
        return next.find((item) => item.id === productId);
    }
}

export async function deleteProduct(productId) {
    try {
        await apiClient.delete(`/admin/products/${productId}`);
    } catch (error) {
        const next = getFallbackProducts().filter((item) => item.id !== productId);
        persistProducts(next);
        console.warn('Product deletion saved locally. Wire real API to persist.', error);
    }
}



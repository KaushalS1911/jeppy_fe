const PRODUCTS_KEY = 'jeppy_admin_products_cache';
const LEADS_KEY = 'jeppy_admin_leads_cache';

function safeRead(key) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function safeWrite(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        /* ignore quota errors */
    }
}

export function readProductsCache() {
    return safeRead(PRODUCTS_KEY);
}

export function writeProductsCache(items) {
    safeWrite(PRODUCTS_KEY, items);
}

export function readLeadsCache() {
    return safeRead(LEADS_KEY);
}

export function writeLeadsCache(items) {
    safeWrite(LEADS_KEY, items);
}



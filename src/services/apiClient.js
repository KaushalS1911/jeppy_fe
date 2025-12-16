import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.jeppy.local',
    timeout: 10000
});

apiClient.interceptors.request.use((config) => {
    const raw = localStorage.getItem('jeppy_admin_session');
    if (raw) {
        try {
            const {token} = JSON.parse(raw);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch {
            // ignore parse errors
        }
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        const status = error?.response?.status;
        if (status === 401) {
            window.dispatchEvent(new Event('jeppy:admin:unauthorized'));
        }
        return Promise.reject(error);
    }
);

export default apiClient;


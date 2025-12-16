import apiClient from './apiClient.js';

const mockSession = {
    user: {name: 'Jeppy Admin', email: 'admin@jeppy.com'},
    token: 'mock-admin-token',
    refreshToken: 'mock-refresh-token'
};

export async function loginRequest(credentials) {
    try {
        const {data} = await apiClient.post('/admin/auth/login', credentials);
        return data;
    } catch (error) {
        console.warn('Using mock admin session. Wire real /admin/auth/login.', error);
        const isValidMock = credentials.email && credentials.password;
        if (!isValidMock) throw error;
        return mockSession;
    }
}

export async function refreshTokenRequest(refreshToken) {
    try {
        const {data} = await apiClient.post('/admin/auth/refresh', {refreshToken});
        return data;
    } catch (error) {
        console.warn('Using mock refresh token. Wire real /admin/auth/refresh.', error);
        return {...mockSession, token: 'mock-admin-token-refreshed'};
    }
}



import {createContext, useCallback, useContext, useEffect, useMemo, useState} from 'react';
import {loginRequest, refreshTokenRequest} from '../services/authService.js';

const AuthContext = createContext(null);

function readPersistedState() {
    try {
        const raw = localStorage.getItem('jeppy_admin_session');
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}

function persistState(data) {
    try {
        localStorage.setItem('jeppy_admin_session', JSON.stringify(data));
    } catch {
        /* no-op */
    }
}

export function AuthProvider({children}) {
    const [session, setSession] = useState(() => readPersistedState());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (session) {
            persistState(session);
        } else {
            localStorage.removeItem('jeppy_admin_session');
        }
    }, [session]);

    const login = useCallback(async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const data = await loginRequest(credentials);
            setSession(data);
            return {success: true};
        } catch (error) {
            const message = error?.response?.data?.message || error.message || 'Unable to login';
            setError(message);
            return {success: false, message};
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        setSession(null);
    }, []);

    useEffect(() => {
        function handleUnauthorized() {
            logout();
        }

        window.addEventListener('jeppy:admin:unauthorized', handleUnauthorized);
        return () => window.removeEventListener('jeppy:admin:unauthorized', handleUnauthorized);
    }, [logout]);

    const refreshSession = useCallback(async () => {
        if (!session?.refreshToken) return null;
        try {
            const data = await refreshTokenRequest(session.refreshToken);
            const nextSession = {...session, token: data.token};
            setSession(nextSession);
            return nextSession;
        } catch {
            logout();
            return null;
        }
    }, [logout, session]);

    const value = useMemo(() => ({
        user: session?.user || null,
        token: session?.token || null,
        isAuthenticated: Boolean(session?.token),
        loading,
        error,
        login,
        logout,
        refreshSession
    }), [error, loading, login, logout, refreshSession, session]);

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) {
        throw new Error('useAuth must be used within AuthProvider');
    }
    return ctx;
}



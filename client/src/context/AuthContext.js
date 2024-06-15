import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    });

    const loadUser = async () => {
        if (localStorage.token) {
            axios.defaults.headers.common['x-auth-token'] = localStorage.token;
        } else {
            delete axios.defaults.headers.common['x-auth-token'];
        }
        try {
            const res = await axios.get('/api/auth');
            setAuthState({
                token: localStorage.getItem('token'),
                isAuthenticated: true,
                loading: false,
                user: res.data
            });
        } catch (err) {
            setAuthState({
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            });
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const register = async (formData) => {
        const res = await axios.post('/api/auth/register', formData);
        setAuthState({
            ...authState,
            token: res.data.token,
            isAuthenticated: true
        });
        localStorage.setItem('token', res.data.token);
        loadUser();
    };

    const login = async (formData) => {
        const res = await axios.post('/api/auth/login', formData);
        setAuthState({
            ...authState,
            token: res.data.token,
            isAuthenticated: true
        });
        localStorage.setItem('token', res.data.token);
        loadUser();
    };

    const logout = () => {
        setAuthState({
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null
        });
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{
            authState,
            register,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };

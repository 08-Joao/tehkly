import axios from "axios";


const authURL = process.env.NEXT_PUBLIC_AUTH_API_URL || 
    (typeof window !== 'undefined' && window.location.hostname.endsWith('tehkly.com')
        ? 'https://api-auth.tehkly.com/'
        : 'http://localhost:4004/api');

const baseURL = process.env.NEXT_PUBLIC_API_URL ||
    (typeof window !== 'undefined' && window.location.hostname.endsWith('tehkly.com')
        ? 'https://api.tehkly.com'
        : 'http://localhost:4000');

const backendRoute = axios.create({
    baseURL,
    withCredentials: true
})

const authRoute = axios.create({
    baseURL: authURL,
    withCredentials: true
})


// Interceptor para logging de erros
backendRoute.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('[API Error]', error.response?.status, error.config?.url);
        return Promise.reject(error);
    }
);

// Interceptor para logging de erros
authRoute.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error('[Auth API Error]', error.response?.status, error.config?.url);
        return Promise.reject(error);
    }
);

export { authRoute, backendRoute };
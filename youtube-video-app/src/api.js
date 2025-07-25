import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para agregar el token a todas las solicitudes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor para manejar respuestas y errores
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Si el token es inválido o ha expirado
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirigir al login si es necesario
      if (window.location.pathname !== '/login' && window.location.pathname !== '/register') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// Funciones de autenticación
export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  verify: () => api.get('/auth/verify')
};

// Funciones para cursos
export const cursosAPI = {
  getAll: () => api.get('/cursos'),
  getById: (id) => api.get(`/cursos/${id}`),
  create: (cursoData) => api.post('/cursos', cursoData),
  update: (id, cursoData) => api.put(`/cursos/${id}`, cursoData),
  delete: (id) => api.delete(`/cursos/${id}`),
  getLecciones: (id) => api.get(`/cursos/${id}/lecciones`)
};

// Funciones para lecciones
export const leccionesAPI = {
  getAll: () => api.get('/lecciones'),
  getById: (id) => api.get(`/lecciones/${id}`),
  create: (leccionData) => api.post('/lecciones', leccionData),
  update: (id, leccionData) => api.put(`/lecciones/${id}`, leccionData),
  delete: (id) => api.delete(`/lecciones/${id}`),
  completar: (id) => api.post(`/lecciones/${id}/completar`)
};

// Funciones para usuarios
export const usuariosAPI = {
  getAll: () => api.get('/usuarios'),
  getPerfil: () => api.get('/usuarios/perfil'),
  updatePerfil: (userData) => api.put('/usuarios/perfil', userData),
  getProgreso: (userId) => api.get(`/usuarios/${userId}/progreso`)
};

// Funciones para notificaciones
export const notificacionesAPI = {
  getAll: () => api.get('/notificaciones'),
  getNoLeidas: () => api.get('/notificaciones/no-leidas'),
  create: (notificationData) => api.post('/notificaciones', notificationData),
  marcarLeida: (id) => api.put(`/notificaciones/${id}/marcar-leida`),
  marcarTodasLeidas: () => api.put('/notificaciones/marcar-todas-leidas'),
  delete: (id) => api.delete(`/notificaciones/${id}`)
};

// Función de utilidad para obtener información del usuario del localStorage
export const getCurrentUser = () => {
  try {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  } catch (error) {
    console.error('Error parsing user from localStorage:', error);
    return null;
  }
};

// Función de utilidad para verificar si el usuario está autenticado
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  const user = getCurrentUser();
  return !!(token && user);
};

export default api;

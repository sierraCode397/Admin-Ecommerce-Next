const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const endPoints = {
    products: {
        get: `${API}/${VERSION}/products`,
        post: `${API}/${VERSION}/products`,
        limitOffset: (limit = 10, offset = 1) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
        getId: (id) => `${API}/${VERSION}/products/${id}`,
        put: (id) => `${API}/${VERSION}/products/${id}`,
        delete: (id) => `${API}/${VERSION}/products/${id}`,
    },
    users: {
        get: `${API}/${VERSION}/users`,
        post: `${API}/${VERSION}/users`,
        getId: (id) => `${API}/${VERSION}/users/${id}`,
        put: (id) => `${API}/${VERSION}/users/${id}`,
        delete: (id) => `${API}/${VERSION}/users/${id}`,
        isAvailable: `${API}/${VERSION}/users/is-available`,
    },
    auth: {
        login: `${API}/${VERSION}/auth/login`,
        profile: `${API}/${VERSION}/auth/profile`,
        refresh: `${API}/${VERSION}/auth/refresh-token`,
    },
    categories: {
        get: `${API}/${VERSION}/categories`,
        post: `${API}/${VERSION}/categories`,
        getId: (id) => `${API}/${VERSION}/categories/${id}`,
        update: (id) => `${API}/${VERSION}/categories/${id}`,
        getProducts: (id) => `${API}/${VERSION}/categories/${id}/products`,
    },
    files: {
        post: `${API}/${VERSION}/files/upload`,
        get: (filename) => `${API}/${VERSION}/files/${filename}`,
    },
};

export default endPoints;
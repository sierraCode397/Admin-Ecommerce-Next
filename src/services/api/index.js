const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  products: {
    get: `${API}/api/${VERSION}/products`,
    post: `${API}/api/${VERSION}/products`,
    limitOffset: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
    getId: (id) => `${API}/api/${VERSION}/products/${id}`,
    put: (id) => `${API}/api/${VERSION}/products/${id}`,
    delete: (id) => `${API}/api/${VERSION}/products/${id}`,
  },
  users: {
    get: `${API}/api/${VERSION}/users`,
    post: `${API}/api/${VERSION}/users`,
    getId: (id) => `${API}/api/${VERSION}/users/${id}`,
    put: (id) => `${API}/api/${VERSION}/users/${id}`,
    delete: (id) => `${API}/api/${VERSION}/users/${id}`,
    isAvailable: `${API}/api/${VERSION}/users/is-available`,
  },
  auth: {
    login: `${API}/api/${VERSION}/auth/login`,
    profile: `${API}/api/${VERSION}/auth/profile`,
    refresh: `${API}/api/${VERSION}/auth/refresh-token`,
  },
  categories: {
    get: `${API}/api/${VERSION}/categories`,
    post: `${API}/api/${VERSION}/categories`,
    getId: (id) => `${API}/api/${VERSION}/categories/${id}`,
    update: (id) => `${API}/api/${VERSION}/categories/${id}`,
    getProducts: (id) => `${API}/api/${VERSION}/categories/${id}/products`,
  },
  files: {
    post: `${API}/api/${VERSION}/files/upload`,
    get: (filename) => `${API}/api/${VERSION}/files/${filename}`,
  },
};

export default endPoints;

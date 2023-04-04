import axios from 'axios';
import endPoints from '@services/api/index';

const addProduct = async (body) => {
  const config = {
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json',
    },
  };
  const response = await axios.post(endPoints.products.post, body, config);
  return response.data;
};

const deleteProduct = async (id) => {
  const response = await axios.delete(endPoints.products.delete(id));
  return response.data;
};

const updateProduct = async (id, body) => {

    const config = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const response = await axios.put(endPoints.products.put(id), body, config);
    return response.data;
  };
  

export { addProduct, deleteProduct, updateProduct };

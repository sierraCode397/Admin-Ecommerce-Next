import { useState } from 'react';

const useAlert = (options) => {
  const defaultOptions = {
    active: false,
    message: '',
    type: '',
    autoclose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOptions,
    ...options,
  });
  const toggleAlert = () => {
    setAlert(!alert.active);
  };
  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;

import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState(null);
  const [useLogin, setLogin] = useState(false);

  const signIn = async (email, password) => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    };
    const {
      data: { access_token },
    } = await axios.post(endPoints.auth.login, { email, password }, options);
    if (access_token) {
      const token = access_token;
      const oneHour = 1 / 24;
      Cookie.set('token', token, { expires: oneHour });

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      console.log(user);
      setUser(user);
    }
  };

  const refreshSession = async () => {
    const token = Cookie.get('token');

    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const response = await axios.get(endPoints.auth.profile);
      setUser(response.data);
    }
  };

  const logout = () => {
    Cookie.remove('token');
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = '/login'; /* router.push('/login');  Otra forma de redieccionar*/
  };

  return {
    refreshSession,
    useLogin,
    setLogin,
    user,
    signIn,
    logout,
  };
}

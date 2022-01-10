import { createContext, useEffect, useState } from 'react';
import { authApp } from '../config/firebase';

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const register = (email, password) => {
    return authApp.createUserWithEmailAndPassword( email, password);
  };

  const login = (email, password) => {
    return authApp.signInWithEmailAndPassword(email+'@gmail.com', password);
  };

  const logout = () => {
    return authApp.signOut();
  };

  useEffect(() => {
    const subscribe = authApp.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return subscribe;
  }, []);


  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

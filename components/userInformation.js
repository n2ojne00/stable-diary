import React, { createContext, useState, useEffect, useContext } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { AUTH } from '../FirebaseConfig';


const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTH, (u) => {
      setUser(u);
      if (u) {
        console.log(`User Information: ${u.email} is logged in`);
      } else {
        console.log('User Information: no logged in user');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

// Helppokäyttöinen hook
export const useUser = () => useContext(UserContext);

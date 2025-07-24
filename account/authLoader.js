import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import AppTabs from '../navigation/BottomTabs';
import { AuthStack } from '../navigation/SideNavigation';
import { AUTH } from '../FirebaseConfig';




export default function AuthLoader() {
  const [user, setUser] = useState(undefined); // undefined = loading

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(AUTH, (u) => {
      setUser(u);
      if (u) {
        console.log(`AuthLoader: User ${u.email} is logged in`);
      } else {
        console.log('AuthLoader: No user is logged in');
      }
    });

    return unsubscribe;
  }, []);

  if (user === undefined) {
    return null; //Loading screeen?
  }

  return user ? <AppTabs /> : <AuthStack />;
}
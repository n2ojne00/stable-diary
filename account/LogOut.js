import { signOut } from 'firebase/auth';
import { AUTH } from '../FirebaseConfig';


export const logout = async (navigation) => {
  try {
    const currentUser = AUTH.currentUser;

    if (currentUser) {
      console.log(`User ${currentUser.email || currentUser.uid} logging out`);
      alert('Olet kirjautunut ulos.');
    } else {
      console.log('Unknown user logging out');
    }

    await signOut(AUTH);
    console.log('Signout successful');

    /**  if (navigation) {
       navigation.reset({
         index: 0,
         routes: [{ name: 'AuthLoader' }]
       });
     }
       */ //Do we need to reset navigation here? does authLoader handle it on its own?

  } catch (error) {
    console.error('Logging out failed:', error.message);
  }
};